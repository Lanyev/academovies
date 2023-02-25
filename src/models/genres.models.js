const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Genres = db.define("genres", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Genres;
