const Genres = require("./genres.model");

const findAllGenres = async (req, res) => {
  const data = await Genres.findAll();
  return data;
};

const createGenre = async (name) => {
  const data = await Genres.create({ name });
  return data;
};

module.exports = {
  findAllGenres,
  createGenre,
};
