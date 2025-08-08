function verificarIdade() {
  const idade = document.getElementById("idadeInput").value;
  try {
    if (isNaN(idade) || idade.trim() === "") throw "A idade deve ser um número.";
    if (parseInt(idade) < 0) throw "A idade não pode ser negativa.";
    document.getElementById("saida").textContent = `Idade válida: ${idade}`;
  } catch (erro) {
    document.getElementById("saida").textContent = `Erro: ${erro}`;
  }
}