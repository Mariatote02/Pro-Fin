const Libro = require("../models/libros");

// Create new book
const createLibro = async (req, res) => {

}

// Get all
const getAllLibros = async (req, res) => {
  const libros = await Libro.find();
  res.send({ data: libros });
}

// Update libro

module.exports = { getAllLibros, createLibro }