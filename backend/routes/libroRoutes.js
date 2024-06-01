const express = require('express');
const libroController = require('../controllers/libroController');

const libroRoutes = express.Router();

// Create / Creación o Inserción
libroRoutes.post('libros', libroController.createLibro);
// Read / Consulta
libroRoutes.get('/libros', libroController.getAllLibros);

module.exports = libroRoutes;