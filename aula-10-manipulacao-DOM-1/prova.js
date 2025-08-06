const input = document.getElementById("tarefaInput");
const botao = document.getElementById("adicionarTarefa");
const lista = document.getElementById("listaTarefas");

botao.addEventListener("click", () => {
  const texto = input.value.trim();
  if (texto === "") return;

  const li = document.createElement("li");
  li.textContent = texto;

  li.addEventListener("click", () => {
    li.classList.toggle("concluida");
  });

  const btnRemover = document.createElement("button");
  btnRemover.textContent = "Remover";
  btnRemover.addEventListener("click", () => {
    lista.removeChild(li);
  });

  li.appendChild(btnRemover);
  lista.appendChild(li);
  input.value = "";
});