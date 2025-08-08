document.getElementById("salvarNome").addEventListener("click", () => {
  const nome = document.getElementById("nomeInput").value;
  localStorage.setItem("nomeUsuario", nome);
  exibirNome();
});

function exibirNome() {
  const nome = localStorage.getItem("nomeUsuario");
  if (nome) {
    document.getElementById("nomeExibido").textContent = `Olá, ${nome}!`;
  }
}

exibirNome();