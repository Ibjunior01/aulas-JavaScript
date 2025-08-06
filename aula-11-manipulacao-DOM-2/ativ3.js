document.getElementById("adicionarCartao").addEventListener("click", () => {
  const titulo = document.getElementById("titulo").value.trim();
  const descricao = document.getElementById("descricao").value.trim();
  if (!titulo || !descricao) return;

  const div = document.createElement("div");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");

  h3.textContent = titulo;
  p.textContent = descricao;

  div.appendChild(h3);
  div.appendChild(p);
  document.getElementById("areaCartoes").appendChild(div);
});