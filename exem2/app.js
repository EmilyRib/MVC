// server.js

// Importa o módulo 'express' para criar o servidor
const express = require('express');
const app = express();
const port = 3000;

const userRouter = require('./app/router')

app.use('/', userRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})