//? Import the Express App (app) and the response handlers
const express = require("express");
const responseHandlers = require("./utils/handleResponses");
const db = require("./utils/database");
const initModels = require("./models/initModels");
const config = require("../config").api;
const upload = require("./utils/multer");
const userRouter = require("./users/users.router");
const authRouter = require("./auth/auth.router");
const movieRouter = require("./movies/movies.router");
const app = express();

//? The Express App (app) is always required and must be the first thing you import.
app.use(express.json());
//? Authenticate the database and sync the models
db.authenticate()
  .then(() => console.log("Database authenticated"))
  .catch((err) => console.log(err));
//? Sync the models
db.sync()
  .then(() => console.log("Database Synced"))
  .catch((err) => console.log(err));
//? Initialize the models
initModels();
//? Routes
//? Home
app.get("/", (req, res) => {
  responseHandlers.success({
    res,
    status: 200,
    message: "Servidor inicializado correctamente",
    data: {
      users: `${config.host}/api/v1/users`,
    },
  });
});
app.get("/query", (req, res) => {
  db.query("SELECT * FROM users")
    .then((result) => {
      responseHandlers.success({
        res,
        status: 200,
        message: "Query ejecutada correctamente",
        data: result,
      });
    })
    .catch((err) => {
      responseHandlers.error({
        res,
        status: 500,
        message: "Error al ejecutar la query",
        data: err,
      });
    });
});

//? Upload file
app.post(
  "/upload-file",
  upload.fields([{ name: "uploadFile, maxCount: 1" }]),
  (req, res) => {
    console.log(req.file);
    responseHandlers.success({
      res,
      status: 200,
      message: "File uploaded successfully",
      data: req.file,
    });
  }
);
//? Users
app.use("/api/v1/users", userRouter);
//? Auth
app.use("/api/v1/auth", authRouter);
//? Movies
app.use("/api/v1/movies", movieRouter);

//? Error handler
app.use("*", (req, res) => {
  responseHandlers.error({
    res,
    status: 404,
    message: `URL not found, please try with ${config.host}`,
  });
});

//? Start the server
app.listen(config.port, () => {
  console.log(`Server started at port ${config.port}`);
});
