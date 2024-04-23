// app/models/user.js

// Array que armazena os usuários
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];
  
  // Exporta um objeto com um método para obter todos os usuários
  module.exports = {
    // Método para obter todos os usuários
    getAllUsers:() => users
    
  };

