const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const MoviesGenres = db.define("moviesGenres", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  movieId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  genreId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
});

module.exports = MoviesGenres;
