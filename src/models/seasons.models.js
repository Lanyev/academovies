const { DataTypes } = require("sequelize");
const db = require("../utils/database");
const Series = require("./series.models");

const Seasons = db.define("seasons", {
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
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  seasonNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  releaseYear: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cover_url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  trailer_url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Seasons;
