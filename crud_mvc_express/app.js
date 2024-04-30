const express = require("express");
const app = express();
const port = 3000;
// Definindo middlewares para parsear o corpo da requisição
app.use(express.json()); // Para parsear application/json
app.use(express.urlencoded({ extended: true })); // Para parsear application/x-www-form-urlen
// Servindo arquivos estáticos da pasta 'public'
app.use(express.static("public"));
// Importando e usando as rotas do arquivo tarefaRouter
const tarefaRouter = require("./app/routes/tarefaRouter");
app.use("/tarefas", tarefaRouter);
// Iniciando o servidor na porta especificada
app.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`);
});