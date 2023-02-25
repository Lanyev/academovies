const Users = require("./users.models");
const Genres = require("./genres.models");
const Series = require("./series.models");
const Seasons = require("./seasons.models");
const Episodes = require("./episodes.models");
const Movies = require("./movies.models");
const MoviesGenres = require("./moviesGenres.models");
const SeriesGenres = require("./seriesGenres.models");

const initModels = () => {
  // Users -> Movies
  Users.hasMany(Movies);
  Movies.belongsTo(Users);

  // Users -> Series
  Users.hasMany(Series);
  Series.belongsTo(Users);

  // Genres -> Movies
  Genres.hasMany(Movies);
  Movies.belongsTo(Genres);

  // Genres -> Series
  Genres.hasMany(Series);
  Series.belongsTo(Genres);

  // Series -> Seasons
  Series.hasMany(Seasons);
  Seasons.belongsTo(Series);

  // Series -> Episodes
  Series.hasMany(Episodes);
  Episodes.belongsTo(Series);

  // Seasons -> Episodes
  Seasons.hasMany(Episodes);
  Episodes.belongsTo(Seasons);

  // Movies -> MoviesGenres
  Movies.hasMany(MoviesGenres);
  MoviesGenres.belongsTo(Movies);

  // Genres -> MoviesGenres
  Genres.hasMany(MoviesGenres);
  MoviesGenres.belongsTo(Genres);

  // Series -> SeriesGenres
  Series.hasMany(SeriesGenres);
  SeriesGenres.belongsTo(Series);

  // Genres -> SeriesGenres
  Genres.hasMany(SeriesGenres);
  SeriesGenres.belongsTo(Genres);
};

module.exports = initModels;
