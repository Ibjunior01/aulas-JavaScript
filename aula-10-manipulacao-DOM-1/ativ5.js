const container = document.getElementById("container");

document.getElementById("adicionarParagrafo").addEventListener("click", () => {
  const p = document.createElement("p");
  p.textContent = "Novo parágrafo";
  container.appendChild(p);
});

document.getElementById("removerParagrafo").addEventListener("click", () => {
  const ultimo = container.lastElementChild;
  if (ultimo) {
    container.removeChild(ultimo);
  }
});