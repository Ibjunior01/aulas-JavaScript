
//Atividade 01 - var, let, const
var nome = "Ibermon";
let idade = 29;
const cidade = "Fortaleza";

console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Cidade:", cidade);

// Reatribuição
nome = "Junior";
idade = 30;

// Tentativa de alterar constante
try {
  cidade = "Recife"; // Vai lançar erro
} catch (e) {
  console.log("Erro ao alterar constante:", e.message);
}

console.log("Novo Nome:", nome);
console.log("Nova Idade:", idade);



//Atividade 02 – Operações básicas
let num1 = 10;
let num2 = 5;
const nome = "Ibermon";
const cidade2 = "Fortaleza";

const soma = num1 + num2;
const subtracao = num1 - num2;
const multiplicacao = num1 * num2;
const divisao = num1 / num2;

console.log("Soma:", soma);
console.log("Subtração:", subtracao);
console.log("Multiplicação:", multiplicacao);
console.log("Divisão:", divisao);
console.log(`Nome: ${nome}, Cidade: ${cidade2}`);


//Atividade 03 - Condicionais no cinema
// 1 - Desconto por idade
let idade3 = 16;
if (idade3 < 18 || idade3 >= 65) {
  console.log("Você tem direito a desconto no cinema.");
} else {
  console.log("Você paga entrada inteira.");
}

// 2 - Bilheteria aberta
let horaAtual = 19;
if (horaAtual >= 14 && horaAtual <= 22) {
  console.log("A bilheteria está aberta.");
} else {
  console.log("Bilheteria fechada.");
}

// 3 - Filme em exibição
let horaInicio = 18;
let horaFim = 20;
if (horaAtual >= horaInicio && horaAtual <= horaFim) {
  console.log("Filme em exibição.");
} else {
  console.log("Filme não está sendo exibido agora.");
}


//Atividade 04 - Classificação de idade
let idade4 = prompt("Digite sua idade:");

if (idade4 < 18) {
  console.log("Você é menor de idade.");
} else if (idade4 <= 65) {
  console.log("Você é um adulto.");
} else {
  console.log("Você é idoso.");
}

//Atividade 05 - Triângulo número invertido
let n = 5;

for (let i = n; i >= 1; i--) {
  let linha = "";
  for (let j = 1; j <= i; j++) {
    linha += j + " ";
  }
  console.log(linha.trim());
}

//Atividade 06 - Loops diversos
// 1 - Loop for 1 a 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2 - Loop while números pares
let i = 2;
while (i <= 20) {
  console.log(i);
  i += 2;
}

// 3 - Soma dos números 1 a 5
let soma5 = 0;
for (let i = 1; i <= 5; i++) {
  soma5 += i;
}
console.log("Soma de 1 a 5:", soma5);

//Atividade 07 - Manipulando array
// 1 - Geração de array com números aleatórios
const numeros = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100) + 1);

// 2 - Filtrar pares
const pares = numeros.filter(num => num % 2 === 0);

// 3 - Elevar ao quadrado
const quadrados = pares.map(num => num ** 2);

// 4 - Calcular soma total
const somaFinal = quadrados.reduce((acc, val) => acc + val, 0);

// 5 - Exibição
console.log("Array Original:", numeros);
console.log("Números Pares:", pares);
console.log("Quadrados:", quadrados);
console.log("Soma dos Quadrados:", somaFinal);
