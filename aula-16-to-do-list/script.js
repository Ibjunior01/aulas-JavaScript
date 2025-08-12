const form = document.getElementById("form-tarefa");
const input = document.getElementById("input-tarefa");
const lista = document.getElementById("lista-tarefas");

let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

function salvarTarefas() {
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function renderizarTarefas() {
  lista.innerHTML = "";
  tarefas.forEach((tarefa, index) => {
    const li = document.createElement("li");
    li.className = tarefa.concluida ? "concluida" : "";

    const span = document.createElement("span");
    span.textContent = tarefa.titulo;

    const actions = document.createElement("div");
    actions.className = "actions";

    const btnConcluir = document.createElement("button");
    btnConcluir.textContent = tarefa.concluida ? "Desmarcar" : "Concluir";
    btnConcluir.onclick = () => {
      tarefa.concluida = !tarefa.concluida;
      salvarTarefas();
      renderizarTarefas();
    };

    const btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.onclick = () => {
      const novoTitulo = prompt("Editar tarefa:", tarefa.titulo);
      if (novoTitulo) {
        tarefa.titulo = novoTitulo;
        salvarTarefas();
        renderizarTarefas();
      }
    };

    const btnRemover = document.createElement("button");
    btnRemover.textContent = "Remover";
    btnRemover.onclick = () => {
      tarefas.splice(index, 1);
      salvarTarefas();
      renderizarTarefas();
    };

    actions.append(btnConcluir, btnEditar, btnRemover);
    li.append(span, actions);
    lista.appendChild(li);
  });
}

form.addEventListener("submit", e => {
  e.preventDefault();
  const titulo = input.value.trim();
  if (titulo) {
    tarefas.push({ titulo, concluida: false });
    salvarTarefas();
    renderizarTarefas();
    input.value = "";
  }
});

renderizarTarefas();