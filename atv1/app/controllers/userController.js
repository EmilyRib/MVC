
// app/controllers/userController.js

// Importa o modelo de usuário
const userModel = require('../models/userModel');
const fs = require('fs')
const path = require('path')

// Exporta um objeto com métodos relacionados aos usuários
module.exports = {
  getUsersPage: (req, res) => {
    // Chama o método getAllUsers() do modelo de usuário para obter todos os usuários
    const users = userModel.getAllUsers();
    const filePath = path.join(__dirname, '..', 'views', 'index.html');
    const html = fs.readFileSync(filePath, 'utf8');
    const modifiedHtml = html.replace('{{users}}', JSON.stringify(users))
    res.send(modifiedHtml)
  },

  getId: (req, res) => {
    const users = userModel.getAllUsers();
    const id = req.params.id;
    const user = users.find(user => user.id === parseInt(id))

    if (user) {
      console.log(`Buscando pelo usuário com ID: ${id} `);
      res.send(`<p>ID:${user.id} <br> Nome:${user.name} <br> Idade:${user.age}</p> `)
    } else {
      res.status(404).send('Usuário não encontrado')
    }

  }
}