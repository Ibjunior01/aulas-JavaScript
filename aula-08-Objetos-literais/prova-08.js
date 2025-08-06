
// Objetos literais em JavaScript são estruturas de dados que permitem armazenar pares de chave-valor. Eles são uma maneira simples e direta de criar objetos, onde as chaves (também chamadas de propriedades) são strings que identificam os valores armazenados. Os valores podem ser de qualquer tipo, incluindo números, strings, arrays, funções ou outros objetos. 

const aluno = {
  nome: "Mariana",
  notas: [9, 8, 10],

  calcularMedia() {
    const total = this.notas.reduce((soma, nota) => soma + nota, 0);
    return (total / this.notas.length).toFixed(2);
  }
};

// Desestruturação
const { nome } = aluno;
console.log("Nome do aluno:", nome);

// Spread operator para adicionar nova nota
const novasNotas = [...aluno.notas, 7.5];
console.log("Notas atualizadas:", novasNotas);