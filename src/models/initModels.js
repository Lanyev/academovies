const Users = require("./users.models");
const Genres = require("./genres.models");
const Series = require("./series.models");
const Seasons = require("./seasons.models");
const Episodes = require("./episodes.models");
const Movies = require("./movies.models");
const MoviesGenres = require("./moviesGenres.models");
const SeriesGenres = require("./seriesGenres.models");

const initModels = () => {
  // Users
  Users;

  // Movies <=> Genres - MoviesGenres
  Movies.belongsToMany(Genres, { through: MoviesGenres });
  Genres.belongsToMany(Movies, { through: MoviesGenres });

  // Series <=> Genres - SeriesGenres
  Series.belongsToMany(Genres, { through: SeriesGenres });
  Genres.belongsToMany(Series, { through: SeriesGenres });

  // Series <=> Seasons
  Series.hasMany(Seasons);
  Seasons.belongsTo(Series);

  // Seasons <=> Episodes
  Seasons.hasMany(Episodes);
  Episodes.belongsTo(Seasons);
};

module.exports = initModels;
