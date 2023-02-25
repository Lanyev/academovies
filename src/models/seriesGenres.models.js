const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const MoviesGenres = db.define("moviesGenres", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  genreId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  serieId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
});

module.exports = MoviesGenres;
