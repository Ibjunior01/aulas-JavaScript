function dividir() {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);
  let resultado;

  try {
    if (n2 === 0) throw "Erro: divisão por zero não é permitida.";
    resultado = n1 / n2;
    document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
  } catch (erro) {
    document.getElementById("resultado").textContent = erro;
  } finally {
    console.log("Operação de divisão concluída.");
  }
}