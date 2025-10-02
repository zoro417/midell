const express = require('express');
const authControllers = require('../controllers/login.controller');

const routes = express.Router();

routes.post('/login', authControllers.login);

module.exports = routes; 