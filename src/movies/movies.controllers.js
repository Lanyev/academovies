const Movies = require("../models/movies.models");
const MoviesGenres = require("../models/moviesGenres.models");
const uuid = require("uuid");
const Genres = require("../models/genres.models");

const findAllMovies = async () => {
  // limit = Cantidad de registros a mostrar
  // offset = Desde que registro se empieza a mostrar
  const queryOptions = {
    limit: limit || 20,
    offset: offset || 0,
  };

  if (limit && offset) {
    queryOptions.limit = limit;
    queryOptions.offset = offset;
  }

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

const addGenreToMovie = async (dataObj) => {
  const data = await MoviesGenres.create({
    id: uuid.v4(),
    movieId: dataObj.movieId,
    genreId: dataObj.genreId,
  });
  return data;
};

const findAllMoviesByGenre = async (genreId) => {
  const data = await MoviesGenres.findAll({
    include: {
      model: Genres,
      where: {
        id: genreId,
      },
    },
  });
  return data;
};

module.exports = {
  findAllMovies,
  createMovie,
  addGenreToMovie,
  findAllMoviesByGenre,
};
