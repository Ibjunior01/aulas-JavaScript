// Lista de tarefas
let tarefas = [];

// Função anônima para adicionar tarefa
const adicionarTarefa = function(tarefa) {
  tarefas.push({ descricao: tarefa, concluida: false });
};

// Arrow function para listar tarefas com índice
const listarTarefas = () => {
  console.log("\nLista de Tarefas:");
  tarefas.forEach((tarefa, index) => {
    console.log(`${index}: ${tarefa.descricao} [${tarefa.concluida ? " Concluída" : "Pendente"}]`);
  });
};

// Função que recebe callback para operar na lista de tarefas
function executarOperacaoNaTarefa(indice, operacaoCallback) {
  if (indice >= 0 && indice < tarefas.length) {
    operacaoCallback(indice);
  } else {
    console.log("Índice inválido.");
  }
}

// Callback para remover uma tarefa
function removerTarefa(indice) {
  tarefas.splice(indice, 1);
  console.log(`Tarefa ${indice} removida.`);
}

// Callback para atualizar uma tarefa
function atualizarTarefa(indice) {
  const novaDescricao = prompt("Digite a nova descrição da tarefa:");
  tarefas[indice].descricao = novaDescricao;
  console.log(`Tarefa ${indice} atualizada.`);
}

// Callback para marcar tarefa como concluída
function concluirTarefa(indice) {
  tarefas[indice].concluida = true;
  console.log(`Tarefa ${indice} marcada como concluída.`);
}

// Loop de interação com o usuário
let continuar = true;

while (continuar) {
  const acao = prompt(
    "\nO que você deseja fazer?\n1 - Adicionar Tarefa\n2 - Listar Tarefas\n3 - Remover Tarefa\n4 - Atualizar Tarefa\n5 - Concluir Tarefa\n6 - Sair"
  );

  switch (acao) {
    case "1":
      const novaTarefa = prompt("Digite a descrição da nova tarefa:");
      adicionarTarefa(novaTarefa);
      break;
    case "2":
      listarTarefas();
      break;
    case "3":
      const indiceRemover = parseInt(prompt("Digite o índice da tarefa a remover:"));
      executarOperacaoNaTarefa(indiceRemover, removerTarefa);
      break;
    case "4":
      const indiceAtualizar = parseInt(prompt("Digite o índice da tarefa a atualizar:"));
      executarOperacaoNaTarefa(indiceAtualizar, atualizarTarefa);
      break;
    case "5":
      const indiceConcluir = parseInt(prompt("Digite o índice da tarefa a concluir:"));
      executarOperacaoNaTarefa(indiceConcluir, concluirTarefa);
      break;
    case "6":
      console.log("Até mais!");
      continuar = false;
      break;
    default:
      console.log("Opção inválida.");
  }
}