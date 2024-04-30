// Importando o módulo fs
const fs = require("fs");
// Importando o módulo path
const path = require("path");
// Importando o modelo de tarefa
const tarefaModel = require("../models/tarefaModel");
const tarefaController = {
  // Função para listar as tarefas
  listarTarefas: function (req, res) {
    // Obtendo as tarefas do modelo
    const tarefas = tarefaModel.getTarefas();
    // Enviando o arquivo HTML para o cliente
    res.sendFile(path.join(__dirname, "..", "views", "listarTarefa.html"));
  },
  // Função para exibir o formulário de adição de tarefa
  formAdicionarTarefa: function (req, res) {
    // Enviando o arquivo HTML do formulário para o cliente
    res.sendFile(path.join(__dirname, "..", "views", "adicionarTarefa.html"));
  },
  // Função para adicionar uma nova tarefa
  adicionarTarefa: function (req, res) {
    // Adicionando a tarefa usando o modelo
    tarefaModel.adicionarTarefa(req.body.descricao);
    // Redirecionando para a página de listagem de tarefas
    res.redirect("/tarefas");
  },
  // Função para exibir o formulário de edição de tarefa
  formEditarTarefa: function (req, res) {
    // Obtendo o ID da tarefa a ser editada
    const id = parseInt(req.params.id);
    // Obtendo as tarefas do modelo
    const tarefas = tarefaModel.getTarefas();
    // Encontrando a tarefa pelo ID
    const tarefa = tarefas.find((t) => t.id === id);
    // Verificando se a tarefa existe
    if (tarefa) {
      // Lendo o arquivo HTML de edição de tarefa
      const data = fs.readFileSync(
        path.join(__dirname, "..", "views", "editarTarefa.html"),
        "utf8"
      );
      // Enviando o arquivo HTML para o cliente, substituindo as variáveis {{id}} e {{descrica
      res.send(
        data
          .replace(/{{id}}/g, tarefa.id)
          .replace(/{{descricao}}/g, tarefa.descricao)
      );
    } else {
      // Enviando status 404 se a tarefa não for encontrada
      res.status(404).send("Tarefa não encontrada");
    }
  },
  // Processa a atualização da tarefa
  editarTarefa: function (req, res) {
    // Mostra o ID da tarefa
    console.log(req.params.id);
    // Mostra a nova descrição da tarefa
    console.log(req.body.descricao);
    // Atualizando a tarefa usando o modelo
    const resultado = tarefaModel.atualizarTarefa(
      parseInt(req.params.id),
      req.body.descricao
    );
    // Verificando se a tarefa foi atualizada com sucesso
    if (resultado) {
      // Redirecionando para a página de listagem de tarefas
      res.redirect("/tarefas");
    } else {
      // Enviando status 404 se a tarefa não for encontrada
      res.status(404).send("Tarefa não encontrada");
    }
  },
  // Função para exibir o formulário de exclusão de tarefa
  formExcluirTarefa: function (req, res) {
    // Obtendo o ID da tarefa a ser excluída
    const taskId = req.params.id;
    // Caminho do arquivo HTML
    const filePath = path.join(__dirname, "..", "views", "excluirTarefa.html");
    // Lendo o arquivo HTML
    fs.readFile(filePath, "utf8", (err, data) => {
      // Verificando se houve erro ao ler o arquivo
      if (err) {
        // Enviando status 500 se houver erro
        res.status(500).send("Erro ao carregar a página");
        return;
      }
      // Substituindo a variável {{id}} no HTML
      const replacedData = data.replace(/{{id}}/g, taskId);
      // Enviando o arquivo HTML com o ID substituído para o cliente
      res.send(replacedData);
    });
  },
  // Função para excluir uma tarefa
  excluirTarefa: function (req, res) {
    // Excluindo a tarefa usando o modelo
    tarefaModel.excluirTarefa(parseInt(req.params.id));
    // Redirecionando para a página de listagem de tarefas
    res.redirect("/tarefas");
  },
  // Função para listar as tarefas via API
  apiListarTarefas: function (req, res) {
    // Obtendo as tarefas do modelo
    const tarefas = tarefaModel.getTarefas();
    // Enviando as tarefas como JSON para o cliente
    res.json(tarefas);
  },
};
module.exports = tarefaController; // Exportando o controlador de tarefas