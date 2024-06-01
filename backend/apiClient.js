const axios = require('axios');
const { createBook, getBooks, getBookById, updateBook, deleteBook } = require('./apiClient');
const apiClient = axios.create({
    baseURL: 'http://localhost:3000/api/books',
});

module.exports = {
    createBook: async (data) => {
        const result = await apiClient.post('/', data);
        return result.data;
    },
    getBooks: async () => {
        const result = await apiClient.get('/');
        return result.data;
    },
    getBookById: async (id) => {
        const result = await apiClient.get(`/${id}`);
        return result.data;
    },
    updateBook: async (id, data) => {
        const result = await apiClient.put(`/${id}`, data);
        return result.data;
    },
    deleteBook: async (id) => {
        const result = await apiClient.delete(`/${id}`);
        return result.data;
    },
};