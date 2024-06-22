const express = require('express');
const libroController = require('../controllers/libroController');

const libroRoutes = express.Router();

// Create / Creación o Inserción
libroRoutes.post('/libros', libroController.createLibro);
// Read / Consulta
libroRoutes.get('/libros', libroController.getAllLibros);
// Delete / Eliminar
libroRoutes.delete('/libros/:id', libroController.deleteLibro);
// Update / Actualizar
libroRoutes.put('/libros/:id', libroController.updateLibro);

module.exports = libroRoutes;