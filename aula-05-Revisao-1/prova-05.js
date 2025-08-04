let tarefas = [];

while (true) {
  let opcao = prompt(
    "Gerenciador de Tarefas\n\nEscolha uma opção:\n" +
    "1 - Adicionar tarefa\n" +
    "2 - Listar tarefas\n" +
    "3 - Remover tarefa\n" +
    "4 - Concluir tarefa\n" +
    "5 - Sair"
  );

  if (opcao === "1") {
    let novaTarefa = prompt("Digite o nome da nova tarefa:");
    tarefas.push(novaTarefa);
    alert(`Tarefa adicionada: ${novaTarefa}`);
  } else if (opcao === "2") {
    if (tarefas.length === 0) {
      alert("Nenhuma tarefa cadastrada.");
    } else {
      let lista = "Lista de Tarefas:\n";
      for (let i = 0; i < tarefas.length; i++) {
        lista += `${i} - ${tarefas[i]}\n`;
      }
      alert(lista);
    }
  } else if (opcao === "3") {
    let indiceRemover = prompt("Digite o índice da tarefa que deseja remover:");
    if (indiceRemover >= 0 && indiceRemover < tarefas.length) {
      let removida = tarefas.splice(indiceRemover, 1);
      alert(`Tarefa removida: ${removida}`);
    } else {
      alert("Índice inválido.");
    }
  } else if (opcao === "4") {
    let indiceConcluir = prompt("Digite o índice da tarefa que deseja concluir:");
    if (indiceConcluir >= 0 && indiceConcluir < tarefas.length) {
      tarefas[indiceConcluir] = + tarefas[indiceConcluir];
      alert(`Tarefa concluída: ${tarefas[indiceConcluir]}`);
    } else {
      alert("Índice inválido.");
    }
  } else if (opcao === "5") {
    alert("Saindo do Gerenciador de Tarefas. Até mais!");
    break;
  } else {
    alert("Opção inválida. Tente novamente.");
  }
}