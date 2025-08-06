
const aluno = {
  nome: "Júnior",
  idade: 17,
  notas: [8.5, 7.0, 6.5],

  calcularMedia() {
    const soma = this.notas.reduce((acc, nota) => acc + nota, 0);
    return soma / this.notas.length;
  }
};

// Desestruturação para acessar nome e idade
const { nome, idade } = aluno;

// Spread operator para adicionar nova nota
aluno.notas = [...aluno.notas, 9.0];

// Função para verificar situação
function verificarSituacao(media) {
  return media >= 7
    ? "Aprovado"
    : "Reprovado";
}

// Loop para exibir todas as notas
console.log(`Aluno: ${nome}`);
console.log(`Idade: ${idade}`);
console.log("Notas:");
for (let i = 0; i < aluno.notas.length; i++) {
  console.log(`Nota ${i + 1}: ${aluno.notas[i]}`);
}

// Média e situação
const mediaFinal = aluno.calcularMedia();
const situacao = verificarSituacao(mediaFinal);

console.log(` Média Final: ${mediaFinal.toFixed(2)}`);
console.log(`Situação: ${situacao}`);