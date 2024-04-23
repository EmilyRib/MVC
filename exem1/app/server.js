// server.js

// Importa o módulo 'express' para criar o servidor
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// Configuração para servir arquivos estáticos na pasta 'app/views'
app.use(express.static(path.join(__dirname, 'app', 'view')));

// Rota para a view principal
app.get('/', (req, res) => {
  // Envia o arquivo HTML da página principal
  res.sendFile(path.join(__dirname, 'app', 'view', 'index'));
});

// Rota para fornecer os dados dos usuários como JSON
app.get('/users', (req, res) => {
  // Importa o modelo de usuário
  const userModel = require('./models/users');
  // Obtém todos os usuários do modelo
  const users = userModel.getAllUsers();
  // Retorna os usuários como JSON
  res.json(users);
});

// Inicia o servidor na porta especificada
app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`)
});