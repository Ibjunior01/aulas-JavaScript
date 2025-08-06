document.getElementById("meuLink").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("mensagem").textContent = "Você clicou no link, mas a navegação foi bloqueada.";
});