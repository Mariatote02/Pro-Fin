const Autor = require("../models/Autores")

// CREATE
const createAutor = async (req, res) => {
  try {
    const autorInformation = req.body;  // recuperamos información de la petición

    console.log(`AUTOR INFORMATION: ${autorInformation}`);

    const newAutor = new Autor(autorInformation); // creamos un objeto del modelo autor
    const result = await newAutor.save(); // salvamos ese objeto en la BD
    res.status(201).json(result); // regresar la respuesta de la petición
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

// READ ALL
const getAllAutores = async (req, res) => {
  const autores = await Autor.find({ isActive: true });
  res.send({ data: autores });
}

// READ ONE
const getOneAutor = async (req, res) => {
  const autorId = req.params.autorId;
  console.log({ autorId });
  const autor = await Autor.findById(autorId);
  // TO DO: ajustar considerando isActive
  res.send(autor);
}

// UPDATE  - actualizar
const updateAutor = async (req, res) => {
  const { autorId } = req.params;
  const autorInformacion = req.body;
  const autorActualizado = await Autor.findByIdAndUpdate(autorId, autorInformacion, { new: true });
  res.send(autorActualizado);
}

// DELETE 
// soft/inhabilitar
const deleteAutor = async (req, res) => {
  const { autorId } = req.params;
  const autorInhabilidato = await Autor.findByIdAndUpdate(autorId, { isActive: false }, { new: true });
  console.log(autorInhabilidato);
  res.status(200).send({
    success: true,
    message: "Autor eliminado correctamente."
  });
}

// Hard / eliminación definiva
const destroyAutor = async (req, res) => {
  const { autorId } = req.params;
  const autorDestruido = await Autor.findByIdAndDelete(autorId);
  console.log("Autor destruido:", autorDestruido);
  res.status(200).send({
    success: true,
    message: "Autor eliminado correctamente."
  });
}

module.exports = { getAllAutores, createAutor, getOneAutor, updateAutor, deleteAutor, destroyAutor };