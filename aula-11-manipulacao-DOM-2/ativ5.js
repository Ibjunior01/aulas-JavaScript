document.getElementById("meuFormulario").addEventListener("submit", (e) => {
  e.preventDefault();
  const valor = document.getElementById("campoTexto").value;
  document.getElementById("resultado").textContent = `Você digitou: ${valor}`;
});