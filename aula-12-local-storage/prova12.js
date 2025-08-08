let notas = JSON.parse(localStorage.getItem("notas")) || [];

function salvarNotas() {
  localStorage.setItem("notas", JSON.stringify(notas));
}

function renderizarNotas() {
  const lista = document.getElementById("listaNotas");
  lista.innerHTML = "";
  notas.forEach((nota, index) => {
    const li = document.createElement("li");
    li.textContent = nota.titulo;

    const btnRemover = document.createElement("button");
    btnRemover.textContent = "Remover";
    btnRemover.onclick = () => {
      notas.splice(index, 1);
      salvarNotas();
      renderizarNotas();
    };

    li.appendChild(btnRemover);
    lista.appendChild(li);
  });
}

document.getElementById("adicionarNota").addEventListener("click", () => {
  const titulo = document.getElementById("tituloNota").value.trim();
  if (!titulo || notas.some(n => n.titulo === titulo)) return;

  notas.push({ titulo });
  document.getElementById("tituloNota").value = "";
  salvarNotas();
  renderizarNotas();
});

renderizarNotas();