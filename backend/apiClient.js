const axios = require('axios');

const apiClient = axios.create({
    baseURL: 'http://localhost:3000/api/books',
});

module.exports = {
    createBook: (data) => apiClient.post('/', data),
    getBooks: () => apiClient.get('/'),
    getBookById: (id) => apiClient.get(`/${id}`),
    updateBook: (id, data) => apiClient.put(`/${id}`, data),
    deleteBook: (id) => apiClient.delete(`/${id}`),
};