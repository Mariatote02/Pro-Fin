const mongoose = require("mongoose");

const libroSchema = new mongoose.Schema({
  titulo: {
    type: String, // atributo / campo
    required: true, // constraint
  },
  autor: {
    type: mongoose.Schema.ObjectId, // identificador del autor
    ref: "autores",
    required: true
  },
  pais: {
    type: String
  },
  genero: { 
    type: String,
    required: true,
    enum: ["Novela", "Cuento", "Ciencia Ficción", "misterio", "policiaco","suspenso"] // enum indica una lista de posibles valores
  }
  //añadir, califcacion, descripcion, si tiene adaptación, si pertenece a una serie...
}, { timestamps: true });

const Libro = mongoose.model("libros", libroSchema);

module.exports = Libro;