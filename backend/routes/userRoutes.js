const express = require('express');
const { register, login } = require('../controllers/userConroller');

const userRoutes = express.Router();

userRoutes.post('/login', login);
userRoutes.post('/register', register);

module.exports = userRoutes;