// app/routes/index.js

// Importa o módulo 'express' para criar rotas
const express = require('express');
const router = express.Router();
// Importa o controlador de usuário
const userController = require('../controllers/userController');

// Define uma rota GET na raiz do aplicativo que chama o método getUsers do controlador de usuário
router.get('/', userController.getUsers);

// Exporta o roteador para ser usado em outros arquivos
module.exports = router;