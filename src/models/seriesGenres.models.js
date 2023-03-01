const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Genres = require("./genres.models");
const Series = require("./series.models");

const SeriesGenres = db.define("seriesGenres", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  serieId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Series,
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

module.exports = SeriesGenres;
