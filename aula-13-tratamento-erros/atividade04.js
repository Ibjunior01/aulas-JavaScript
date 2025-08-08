function dividirComErro() {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);

  try {
    if (b === 0) throw new Error("Divisor não pode ser zero.");
    const resultado = a / b;
    document.getElementById("resposta").textContent = `Resultado: ${resultado}`;
  } catch (erro) {
    console.error(`Erro: ${erro.name} - ${erro.message}`);
    document.getElementById("resposta").textContent = `Erro: ${erro.message}`;
  }
}