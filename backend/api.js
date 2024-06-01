const express = require('express');
const router = express.Router();
const { createBook, getBooks, getBookById, updateBook, deleteBook } = require('./apiClient');

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
    const id = req.params.id;
    const book = await getBookById(id);
    res.send(book);
});

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const result = await updateBook(id, data);
    res.send(result);
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const result = await deleteBook(id);
    res.send(result);
});

module.exports = router;