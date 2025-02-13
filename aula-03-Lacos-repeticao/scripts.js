/*
Estruturas de repetição (Loops) - automatização | flexibilidade | Eficiência -> CUIDADO com loop infinito.


    WHILE: Número NÃO conhecido, loop continua até a condição ser VERDADEIRA.  

//Atividade 01
let i = 0;
while ( i < 10) {
    console.log(i); 
    i++;
}
------------------------------------------------

    DO WHILE: Código executavo uma vez e depois verifica a condição, para quando for FALSA.

//Atividade 02

let numero;

do {
    numero = Number(prompt('Digite um número (um número negativo para sair): '));
    console.log(`Você digitou o número ${numero}`);

}    
    while (numero >=0);

console.log('Número negativo insetido, fim do loop.')
------------------------------------------------

    WHILE (true): loop infinito que será interrompido por BREAK. 
    BREAK: Usado para sair de um loop antes que ele complete todas as iterações. Iniaciando a próxima instrução. 
    CONTINUE: Usado para pular iteração atual de um loop e continuar com a próxima iteração.


//Atividade 03

let numeroSecreto = 7;
let tentativas = 0;
let maxTentativas = 3;

while (true) {
    let palpite = Number(prompt('Advinhe um número de 1 a 10: '));

    if (palpite === numeroSecreto) {
        alert('Parabens, você advinhou o número');
        break;
    }
        else {
            alert('Tente novamente!');
            tentativas++;
        }
    
        if (tentativas === maxTentativas) {
            alert(`Você atingiu as ${maxTentativas}, recomece!`)
        }
}
alert('Jogo encerrado.');


//Atividade 04

let numero = Number(prompt('Digite um núemro interiro positivo: '));

let soma = 0;
let contador = 1; 

while (contador <= numero) {
    soma += contador;
    contador++;
}

alert(`A soma de todos os números de 1 até ${ numero} é ${soma}`)

------------------------------------------------

    FOR: quando se sabe quantas vezes o bloco será executado. 
    for (inicialização; condição; incremento) 
    
for (let i = 1; i <=20; i++) {

    if (i % 3 == 0 ) {
        continue;
    }

    if (i > 15) {
        break;
    }
    console.log(i);
}
    FOR...OF: iterar diretamente sobre os valores de objetos iteráveis, como arrays, strings, Map, Set, entre outros.

 
let texto = prompt('Digite uma palavra ou frase: ');

for (let caractere of texto) {
    console.log(caractere);
}

*/