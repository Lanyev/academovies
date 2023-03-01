const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Genres = require("./genres.models");
const Movies = require("./movies.models");

const MoviesGenres = db.define("moviesGenres", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  movieId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Movies,
      key: "id",
    },
  },
  genreId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Genres,
      key: "id",
    },
  },
});

module.exports = MoviesGenres;
