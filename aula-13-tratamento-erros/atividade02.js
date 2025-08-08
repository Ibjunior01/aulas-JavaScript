function validar() {
  const nome = document.getElementById("nome").value.trim();
  const idade = parseInt(document.getElementById("idade").value);
  let mensagem = "";

  try {
    if (nome.length < 3) throw new Error("Nome deve ter pelo menos 3 caracteres.");
    if (isNaN(idade) || idade <= 0) throw new Error("Idade deve ser um número positivo.");
    if (idade < 18) throw new Error("Usuário deve ter mais de 18 anos.");
    mensagem = " Dados válidos!";
  } catch (erro) {
    mensagem = ` ${erro.message}`;
  } finally {
    document.getElementById("mensagem").textContent = mensagem;
  }
}