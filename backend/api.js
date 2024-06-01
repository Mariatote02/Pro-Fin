const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  // Crea un nuevo libro
});

router.get('/', async (req, res) => {
    // Obtiene una lista de libros
});

router.get('/:id', async (req, res) => {
    // Obtiene un libro por ID
});

router.put('/:id', async (req, res) => {
    // Actualiza un libro por ID
});

router.delete('/:id', async (req, res) => {
    // Elimina un libro por ID
});

module.exports = router;