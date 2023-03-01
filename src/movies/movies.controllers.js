const Movies = require("../models/movies.models");
const uuid = require("uuid");

const findAllMovies = async () => {
  const data = await Movies.findAll();
  return data;
};

const createMovie = async (movieObj) => {
  const newMovie = {
    id: uuid.v4(),
    title: movieObj.title,
    synopsis: movieObj.synopsis,
    releaseYear: movieObj.releaseYear,
    director: movieObj.director,
    duration: movieObj.duration,
    trailer_url: movieObj.trailerUrl,
    cover_url: movieObj.coverUrl,
    movie_url: movieObj.movieUrl,
    classification: movieObj.classification,
    rating: movieObj.rating,
  };
  const data = await Movies.create(newMovie);
  return data;
};

module.exports = {
  findAllMovies,
  createMovie,
};
