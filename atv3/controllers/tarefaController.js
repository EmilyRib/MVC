// Importa o modelo de Tarefa para utilizar as funções definidas nele
const Tarefa = require("../models/tarefaModel");
// Controlador para listar todas as tarefas
async function listarClientes(req, res) {
try {
// Chama a função listarTarefas do modelo Tarefa para obter todas as tarefas do banco de
const tarefas = await Tarefa.listarClientes();
// Retorna as tarefas em formato JSON como resposta da requisição
res.json(tarefas);
} catch (error) {
// Se ocorrer um erro, registra o erro no console e envia uma resposta de erro com status
console.error("Erro ao buscar tarefas:", error);
res.status(500).json({ error: "Erro ao buscar tarefas" });
}
}

// Controlador para criar uma nova tarefa
async function criarTarefa(req, res) {
try {
// Chama a função criarTarefa do modelo Tarefa, passando os dados da nova tarefa do corpo
await Tarefa.criarTarefa(req.body);
// Envia uma resposta de sucesso indicando que a tarefa foi criada
res.send("Tarefa criada com sucesso!");
} catch (error) {
// Se ocorrer um erro, registra o erro no console e envia uma resposta de erro com status
console.error("Erro ao criar tarefa:", error);
res.status(500).send("Erro ao criar tarefa");
}
}

// Controlador para atualizar uma tarefa existente
async function atualizarTarefa(req, res) {
try {
// Obtém o ID da tarefa a ser atualizada a partir dos parâmetros da requisição
const { id } = req.params;
const { nome } = req.params;
const { idade } = req.params;
const { sexo } = req.params;
const { cidade } = req.params;

// Chama a função atualizarTarefa do modelo Tarefa para atualizar a tarefa com o ID e a no
const tarefaAtualizada = await Tarefa.atualizarTarefa(id,nome,idade,sexo,cidade)

// Retorna a tarefa atualizada em formato JSON como resposta da requisição
res.json(tarefaAtualizada);
} catch (error) {
// Se ocorrer um erro, registra o erro no console e envia uma resposta de erro com status
console.error("Erro ao atualizar tarefa:", error);
res.status(500).json({ error: "Erro ao atualizar tarefa" });
}
}

// Controlador para excluir uma tarefa
async function excluirTarefa(req, res) {
  try {
    // Obtém o ID da tarefa a ser excluída a partir dos parâmetros da requisição
    const {id } = req.params;
    // Chama a função excluirTarefa do modelo Tarefa para excluir a tarefa com o ID especifica
    await Tarefa.excluirTarefa(id);
    // Envia uma resposta de sucesso com status 204 indicando que a tarefa foi excluída com s
    res.sendStatus(204);
    } catch (error) {
    // Se ocorrer um erro, registra o erro no console e envia uma resposta de erro com status
    console.error("Erro ao excluir tarefa:", error);
    res.status(500).json({ error: "Erro ao excluir tarefa" });
    }
    }

    // Controlador para obter os detalhes de uma tarefa pelo ID
    async function obterTarefaPorId(req, res) {
    try {
    // Obtém o ID da tarefa a ser obtida a partir dos parâmetros da requisição
    const { id } = req.params;
    // Chama a função obterTarefaPorId do modelo Tarefa para obter os detalhes da tarefa com o
    const tarefa = await Tarefa.obterTarefaPorId(id);
    // Retorna os detalhes da tarefa em formato JSON como resposta da requisição
    res.json(tarefa || { error: "Tarefa não encontrada" });
    } catch (error) {
    // Se ocorrer um erro, registra o erro no console e envia uma resposta de erro com status
    console.error("Erro ao obter cliente por ID:", error);
    res.status(500).json({ error: "Erro ao obter cliente por ID" });
    }
    }
    // Exporta todos os controladores para uso em outras partes do código
    module.exports = {
    listarClientes,
    criarTarefa,
    atualizarTarefa,
    excluirTarefa,
    obterTarefaPorId,
    };