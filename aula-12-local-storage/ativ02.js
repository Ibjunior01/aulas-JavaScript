document.getElementById("salvarTarefa").addEventListener("click", () => {
  const tarefa = document.getElementById("tarefaInput").value;
  localStorage.setItem("tarefa", tarefa);
  exibirTarefa();
});

document.getElementById("removerTarefa").addEventListener("click", () => {
  localStorage.removeItem("tarefa");
  exibirTarefa();
});

document.getElementById("limparTudo").addEventListener("click", () => {
  localStorage.clear();
  exibirTarefa();
});

function exibirTarefa() {
  const tarefa = localStorage.getItem("tarefa");
  document.getElementById("tarefaExibida").textContent = tarefa ? `Tarefa: ${tarefa}` : "Nenhuma tarefa salva.";
}

exibirTarefa();