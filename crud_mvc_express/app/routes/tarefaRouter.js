// Importa o módulo express para criação de rotas
const express = require("express");

// Cria um novo objeto de roteador utilizando o método Router do express
const router = express.Router();

// Importa o controlador de tarefas
const tarefaController = require("../controllers/tarefaController");

// Define as rotas e os controladores correspondentes
// Rota para listar todas as tarefas
router.get("/", tarefaController.listarTarefas);

// Rota para exibir o formulário de adicionar tarefa
router.get("/adicionar", tarefaController.formAdicionarTarefa);
// Rota para adicionar uma nova tarefa
router.post("/adicionar", tarefaController.adicionarTarefa);

// Rota para exibir o formulário de edição de tarefa
router.get("/editar/:id", tarefaController.formEditarTarefa);
// Rota para atualizar uma tarefa
router.post("/editar/:id", tarefaController.editarTarefa);

// Rota para exibir o formulário de exclusão de tarefa
router.get("/excluir/:id", tarefaController.formExcluirTarefa);
// Rota para excluir uma tarefa
router.post("/excluir/:id", tarefaController.excluirTarefa);

// Rota para listar todas as tarefas via API
router.get("/api/listar", tarefaController.apiListarTarefas);

// Exporta o roteador para uso em outros arquivos
module.exports = router;