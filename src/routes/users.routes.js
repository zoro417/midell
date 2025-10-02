const express = require('express');
const userControllers = require('../controllers/users.controller');
const { verificarToken } = require('../middlewares/auth.middleware');

const routes = express.Router();

routes.get('/',[verificarToken], userControllers.getUsers);
routes.post('/', [verificarToken], userControllers.createUser);

module.exports = routes; 
