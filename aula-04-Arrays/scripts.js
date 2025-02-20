/* 
Variáveis simples - armazenar informações únicas e específicas -> números, strings, booleanos, null, e undefined.
Variáveis compostas - gerenciar coleções de dados relacionados -> ARRAYS e OBJETOS.


    //ARRAYS -> armzenar múltiplos valores em uma única variável 

    //Atividade 01

let cores = ['vermelho', 'verde', 'azul', 'amarelo'];
console.log(cores[3]);

    //ARRAY METHODS
Push() adiciona elementos ao final do array e retorna o novo comprimento do array.
Pop() remove o último elemento do array e o retorna.
Shift() remove o primeiro elemento do array e o retorna.
Unshift() adiciona um ou mais elementos ao início do array e retorna o novo comprimento do array.
splice() altera o conteúdo de um array - adicionar, remover, substituir elementos

    //Atividade 02

let animais = ['Cachorro', 'Gato', 'Papagaio'];

// Adiciona o elemento Tartaruga ao final do array
animais.push('Tartaruga');

// Remove o primeiro elemento e adiciona o elemento Coelho no início
animais.shift();
animais.unshift('Coelho');

// Substitui o elemento na posição 2 por Hamster
animais[2] = 'Hamster';

//Comprimento array
console.log('Comprimento atual do array: ', animais.length);

// Acessa e exibe no console o elemento na posição 2
console.log('Elemento na posição 2: ', animais[2]);

//Exibe array final 
console.log('Array Final: ', animais);

    //Atividade 03

let cores = ['Vermelho', 'Verde', 'Azul'];// Cria o array chamado cores com os elementos Vermelho, Verde, Azul

cores.push('Amarelo', 'Roxo');// Adiciona as cores Amarelo e Roxo ao final do array
cores.pop();// Remove a última cor

cores.splice(1, 1, 'Laranja', 'Marrom');// splice para remover "Verde" e adicionar "Laranja" e "Marrom" em seu lugar

let novasCores = cores.slice(0, 2);// Cria um novo array chamado novasCores contendo as primeiras duas cores do array cores

let stringCores = cores.join(', ');//join para criar uma string com todas as cores do array cores, separadas por uma vírgula

cores.reverse();// Inverte a ordem dos elementos no array cores

// Exibe os arrays cores e novasCores, e a string resultante no console
console.log('Array cores:', cores);
console.log('Array novasCores:', novasCores);
console.log('String resultante:', stringCores);


    //Atividade 04
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i< numeros.length; i++ ) { // Utilizando o loop for para percorrer o array
    let numero = numeros[i];

    if (numero % 2 === 0) { // Verificando se o número é par ou ímpar
        console.log (`O número ${numero} é par.`)
    }
    else {
        console.log (`O número ${numero} é ímpar.`)
    }
}

    //Atividade 05
let nomes = ['Alice', 'Bruno', 'Carla', 'Daniel', 'Elisa'];
for (let nome of nomes) {
    console.log (`Bem-vindo(a), ${nome}!`);
}

*/