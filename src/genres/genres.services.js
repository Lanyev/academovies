const genresControllers = require("../genres/genres.controllers");

const getAllGenres = (req, res) => {
  genresControllers
    .findAllGenres()
    .then((data) => {
      responses.success({
        res,
        status: 200,
        data,
        message: "Getting all the genres",
      });
    })
    .catch((err) => {
      responses.error({
        res,
        data: err,
        message: "Something bad getting the genres",
        status: 400,
      });
    });
};

const postGenre = (req, res) => {
  const genreObj = req.body;
  genresControllers
    .createGenre(genreObj)
    .then((data) => {
      responses.success({
        res,
        status: 201,
        data,
        message: "Genre Created! :D",
      });
    })
    .catch((err) => {
      responses.error({
        res,
        data: err,
        message: "Something bad creating the genre",
        status: 400,
      });
    });
};

module.exports = {
  getAllGenres,
  postGenre,
};
