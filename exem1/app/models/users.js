// app/models/user.js

// Array que armazena os usuários
const users = [
  { id: 1, name: 'Usuario 1' },
  { id: 2, name: 'Usuario 2' },
  { id: 3, name: 'Usuario 3' }
];

// Exporta um objeto com um método para obter todos os usuários
module.exports = {
  // Método para obter todos os usuários
  getAllUsers() {
    // Retorna o array de usuários
    return users;
  }
};