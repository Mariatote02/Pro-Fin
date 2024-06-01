const express = require('express');
const autorController = require('../controllers/autorController');
const { validateToken } = require('../middlewares/jwt_validation');
const dotenv = require('dotenv');

dotenv.config(); // Configurar dotenv

const autorRoutes = express.Router();

// Rutas no protegidas

// Read / Consulta
autorRoutes.get('/autores', autorController.getAllAutores);

// ReadOne / Consulta de un solo autor
autorRoutes.get('/autores/:autorId', autorController.getOneAutor);

// Rutas protegidas por un token

// Create / Creación o Inserción
autorRoutes.post('/autores', validateToken(process.env.SECRET), autorController.createAutor);

// Update / Actualización
autorRoutes.patch('/autores/:autorId', autorController.updateAutor);

// Delete / Eliminación
autorRoutes.delete('/autores/:autorId', autorController.deleteAutor); // Soft

autorRoutes.delete('/autores/destroy/:autorId', autorController.destroyAutor); // Hard


module.exports = autorRoutes;