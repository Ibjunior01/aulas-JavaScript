/*
Declaração é uma função é declarada usando a palavra-chave function, seguida pelo nome da função, parênteses e um bloco de código entre chaves.

Parâmetros são variáveis que são passadas para uma função quando ela é chamada. Eles permitem que uma função receba valores externos e os utilize em seu bloco de código. Os parâmetros tornam as funções mais flexíveis e reutilizáveis, permitindo que a mesma função opere em diferentes conjuntos de dados.


*/

// 1 Defina a função exibirMensagem. Dentro da função, utilize console.log para exibir uma mensagem fixa, como "Bem-vindo ao JavaScript!". 2 Dentro da função, utilize console.log para exibir uma mensagem fixa, como "Bem-vindo ao JavaScript!". 3 Chame a função e observe o resultado no console.

function exibirMensagem () {
    console.log("Boa tarde!");
    
}
exibirMensagem();

// Atividade 02 Crie uma função chamada calcularDesconto que receba dois parâmetros: preco e desconto. A função deve calcular o preço final do produto após aplicar o desconto e retornar esse valor. Chame a função com diferentes valores e exiba o resultado no console.

function calcularDesconto (preco, desconto) {
    return preco - (preco * desconto (desconto / 100));

}
console.log(calcularDesconto(100, 10)); // Saída: 90
console.log(calcularDesconto(250, 25)); // Saída: 187.5

//Atividade 03 - Função com número indefinido de parâmentros 
function calcularSoma(...numeros) {
  let soma = 0;
  for (let num of numeros) {
    soma += num;
  }
  return soma;

}
console.log(calcularSoma(1, 2, 3)); // Saída: 6
console.log(calcularSoma(10, 20));  // Saída: 30

// Atividade 4 - Função com um parâmentro
function saudacao(nome) {
  return `Olá, ${nome}!`;

}
console.log(saudacao("Ibermon"));
console.log(saudacao("Maria"));
console.log(saudacao("João"));

//Atividade 05 - Funções anônimas atribuídas a variáveis
const soma = function(a, b) {
  return a + b;
};

const subtracao = function(a, b) {
  return a - b;
};

const multiplicacao = function(a, b) {
  return a * b;

};
console.log(soma(5, 3));          
console.log(subtracao(10, 4));    
console.log(multiplicacao(6, 7)); 

//Atividade 06 - precossar arrays com funções de callback
// Função principal que recebe um array e um callback
function processarArray(array, callback) {
  return array.map(callback); // Aplica o callback a cada item
}

// Função de callback: dobra o número
function dobrarNumero(numero) {
  return numero * 2;
}

// Função de callback: retorna a raiz quadrada
function raizQuadrada(numero) {
  return Math.sqrt(numero);
}

// Array para testes
const numeros = [1, 4, 9, 16, 25];

// Aplicando os callbacks
const numerosDobrados = processarArray(numeros, dobrarNumero);
const numerosComRaiz = processarArray(numeros, raizQuadrada);

// Exibindo no console
console.log("Array original:", numeros);
console.log("números dobrados:", numerosDobrados);
console.log("Raízes quadradas:", numerosComRaiz);

//Atividade 07 - Usando arrow functions
// Arrow function: filtra apenas os pares
const filtrarPares = (array) => array.filter((num) => num % 2 === 0);

// Arrow function: calcula a média
const calcularMedia = (array) => {
  const soma = array.reduce((acc, val) => acc + val, 0);
  return array.length > 0 ? soma / array.length : 0;
};

// Testando com novo array
const valores = [2, 7, 4, 9, 10, 13, 6];

const pares = filtrarPares(valores);
const mediaDosPares = calcularMedia(pares);

// Exibindo resultados
console.log("Valores originais:", valores);
console.log("Números pares:", pares);
console.log("Média dos pares:", mediaDosPares);