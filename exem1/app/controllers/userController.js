
// app/controllers/userController.js

// Importa o modelo de usuário
const userModel = require('../models/users');

// Exporta um objeto com métodos relacionados aos usuários
module.exports = {

  // Método para obter todos os usuários
    getUsersData(req, res) {
    // Chama o método getAllUsers() do modelo de usuário para obter todos os usuários
    const users = userModel.getAllUsers();
    // Retorna os usuários em formato JSON como resposta
    res.json(users);
  }


};