const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    const book = req.body;
    const result = await createBook(book);
    res.status(201).json(result);
});

router.get('/', async (req, res) => {
    const books = await getBooks();
    res.send(books);
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