// app/models/user.js

// Array que armazena os usuários
const users = [
    { id: 1, name: 'Alice' , age: 11},
    { id: 2, name: 'Bob' , age: 15 },
    { id: 3, name: 'Charlie', age: 23 }
  ];
  
  // Exporta um objeto com um método para obter todos os usuários
  module.exports = {
    // Método para obter todos os usuários
    getAllUsers: () => users
    
  };