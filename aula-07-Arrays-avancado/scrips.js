//Atividade 1 Classificar números com forEach()
const numeros1 = [5, -2, 0, 7, -9];

numeros1.forEach((num) => {
  if (num > 0) {
    console.log(`${num} é positivo`);
  } else if (num < 0) {
    console.log(`${num} é negativo`);
  } else {
    console.log(`${num} é zero`);
  }
});

// Atividade 02 – Transformar com map()
const originais = [2, 3, 5, 7];

const quadrados = originais.map((num) => num * num);

console.log("Quadrados:", quadrados);

//Atividade 03 – Filtrar pares com filter()
const numeros3 = [1, 2, 3, 4, 5, 6];

const pares = numeros3.filter((num) => num % 2 === 0);

console.log("Números pares:", pares);

//Atividade 04 – Somar tudo com reduce()
const valores4 = [10, 20, 30, 40];

const total = valores4.reduce((acc, val) => acc + val, 0);

console.log("Soma total:", total);

//Atividade 05 – Verificar negativo com some()
const numeros5 = [4, 7, -3, 8];

const temNegativo = numeros5.some((num) => num < 0);

console.log(temNegativo ? "Tem número negativo!" : "Todos os números são positivos.");

//Atividade 06 – Localizar ímpar com find()
const lista = [2, 4, 6, 7, 8];

const primeiroImpar = lista.find((num) => num % 2 !== 0);

if (primeiroImpar !== undefined) {
  console.log("Primeiro número ímpar encontrado:", primeiroImpar);
} else {
  console.log("Nenhum número ímpar encontrado.");
}

//Atividade 07 – Verificar se todos são positivos com every()
const valores7 = [1, 2, 3, 4, 0];

const todosPositivos = valores7.every((num) => num > 0);

console.log(todosPositivos ? "Todos os números são positivos." : "Há algum número negativo ou zero.");

//Atividade 08 - Mini aplicação com múltiplas análises
const produtos = [
  { nome: "Notebook", preco: 3500, categoria: "Tecnologia" },
  { nome: "Cadeira Gamer", preco: 1200, categoria: "Móveis" },
  { nome: "Celular", preco: 2200, categoria: "Tecnologia" },
  { nome: "Livro", preco: 40, categoria: "Educação" }
];

// Filtrar produtos da categoria 'Tecnologia'
const tech = produtos.filter((p) => p.categoria === "Tecnologia");

// Calcular preço com desconto
const comDesconto = tech.map((p) => ({
  ...p,
  precoComDesconto: p.preco * 0.9
}));

// Somar os valores com desconto
const totalDesconto = comDesconto.reduce((acc, p) => acc + p.precoComDesconto, 0);

// Verificar se há produto abaixo de R$ 100
const temBarato = produtos.some((p) => p.preco < 100);

// Verificar se todos são da mesma categoria
const todosTecnologia = produtos.every((p) => p.categoria === "Tecnologia");

// Encontrar o primeiro produto com preço acima de R$ 2000
const caro = produtos.find((p) => p.preco > 2000);

// Exibir resultados
console.log("Produtos da categoria Tecnologia:", tech);
console.log("Com desconto:", comDesconto);
console.log("Total com desconto:", totalDesconto);
console.log(temBarato ? "Há produto barato." : "Nenhum produto barato.");
console.log(todosTecnologia ? "Todos são tecnológicos." : "Nem todos são da categoria Tecnologia.");
console.log("Produto caro:", caro?.nome ?? "Nenhum produto caro encontrado.");