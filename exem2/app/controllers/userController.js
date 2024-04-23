
// app/controllers/userController.js

// Importa o modelo de usuário
const userModel = require('../models/userModel');
const fs = require('fs')
const path = require('path')

// Exporta um objeto com métodos relacionados aos usuários
module.exports = {
    getUsersPage:(req, res) => {
        // Chama o método getAllUsers() do modelo de usuário para obter todos os usuários
        const users = userModel.getAllUsers();
        const filePath = path.join(__dirname, '..', 'views', 'index.html');
        const html = fs.readFileSync(filePath, 'utf8');
        const modifiedHtml = html.replace('{{users}}', JSON.stringify(users))
        res.send(modifiedHtml)
      },

  // Método para obter todos os usuários
  getUsersData:(req, res) => {
    const users = userModel.getAllUsers();
    res.json(users);
  }
}