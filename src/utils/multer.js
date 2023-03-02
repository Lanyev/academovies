//? Multer is a middleware that allows us to upload files to the server
const multer = require("multer");
//? Multer memory storage is a storage engine for Multer to store uploaded files in memory
const storage = multer.memoryStorage();
//? Multer upload is a function that takes an object with a storage property
const upload = multer({ storage: storage });
//? We export the upload function so that we can use it in other files
module.exports = upload;
