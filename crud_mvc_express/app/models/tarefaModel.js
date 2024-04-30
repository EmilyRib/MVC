// Importa o módulo fs (File System) para lidar com operações de arquivo
const fs = require("fs");
// Define o caminho para o arquivo JSON de banco de dados
const dbPath = "./db/tarefadb.json";
// Define a função para ler as tarefas do arquivo JSON
function lerTarefas() {
  try {
    // Lê os dados do arquivo de banco de dados de forma síncrona
    const data = fs.readFileSync(dbPath, "utf8");
    // Converte os dados JSON em um objeto JavaScript
    return JSON.parse(data);
  } catch (error) {
    // Exibe uma mensagem de erro se ocorrer algum problema na leitura
    console.error("Erro ao ler o arquivo de dados:", error);
    return []; // Retorna um array vazio em caso de erro
  }
}
// Define a função para escrever as tarefas no arquivo JSON
function escreverTarefas(tarefas) {
  try {
    // Converte as tarefas em uma string JSON formatada
    const data = JSON.stringify(tarefas, null, 2);
    // Escreve os dados no arquivo de banco de dados de forma síncrona
    fs.writeFileSync(dbPath, data);
  } catch (error) {
    // Exibe uma mensagem de erro se ocorrer algum problema na escrita
    console.error("Erro ao escrever no arquivo de dados:", error);
  }
}
// Define uma função para obter todas as tarefas
const getTarefas = function () {
  // Chama a função lerTarefas para ler as tarefas do arquivo JSON
  return lerTarefas();
};
// Define uma função para adicionar uma nova tarefa
const adicionarTarefa = function (descricao) {
  // Obtém todas as tarefas do arquivo JSON
  const tarefas = lerTarefas();
  // Cria uma nova tarefa com ID sequencial e descrição fornecida
  const novaTarefa = { id: tarefas.length + 1, descricao };
  // Adiciona a nova tarefa ao array de tarefas
  tarefas.push(novaTarefa);
  // Escreve as tarefas atualizadas de volta no arquivo JSON
  escreverTarefas(tarefas);
  // Retorna a nova tarefa adicionada
  return novaTarefa;
};
// Define uma função para atualizar uma tarefa existente
const atualizarTarefa = function (id, descricao) {
  // Obtém todas as tarefas do arquivo JSON
  const tarefas = lerTarefas();
  // Encontra o índice da tarefa com o ID fornecido
  const index = tarefas.findIndex((t) => t.id === id);
  // Se a tarefa com o ID fornecido for encontrada
  if (index !== -1) {
    // Atualiza a descrição da tarefa
    tarefas[index].descricao = descricao;
    // Escreve as tarefas atualizadas de volta no arquivo JSON
    escreverTarefas(tarefas);
    // Retorna true indicando que a tarefa foi atualizada com sucesso
    return true;
  }
  // Retorna false se a tarefa não for encontrada
  return false;
};
// Define uma função para excluir uma tarefa
const excluirTarefa = function (id) {
  // Obtém todas as tarefas do arquivo JSON
  const tarefas = lerTarefas();
  // Filtra as tarefas para excluir a tarefa com o ID fornecido
  const filteredTarefas = tarefas.filter((t) => t.id !== id);
  // Escreve as tarefas filtradas de volta no arquivo JSON
  escreverTarefas(filteredTarefas);
  // Retorna true se a tarefa foi excluída com sucesso, caso contrário, retorna false
  return tarefas.length !== filteredTarefas.length;
};
// Exporta as funções do módulo para uso em outros arquivos
module.exports = {
  getTarefas,
  adicionarTarefa,
  atualizarTarefa,
  excluirTarefa,
};