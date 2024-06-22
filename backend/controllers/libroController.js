const Libro = require("../models/libros");

// Create new book
const createLibro = async (req, res) => {
  try {
    const libro = new Libro(req.body);
    await libro.save();
    res.status(201).send({ data: libro });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Error al crear libro' });
  }
}

// Obtener todos
const getAllLibros = async (req, res) => {
  const libros = await Libro.find();
  res.send({ data: libros });
}

// Eliminar libro
const deleteLibro = async (req, res) => {
  try {
    const id = req.params.id;
    await Libro.findByIdAndDelete(id);
    res.status(200).send({ message: 'Libro eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Error al eliminar libro' });
  }
}

// Actualizar libro
const updateLibro = async (req, res) => {
  try {
    const id = req.params.id;
    const libro = await Libro.findByIdAndUpdate(id, req.body, { new: true });
    res.send({ data: libro });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Error al actualizar libro' });
  }
}
module.exports = { createLibro, getAllLibros, deleteLibro, updateLibro }