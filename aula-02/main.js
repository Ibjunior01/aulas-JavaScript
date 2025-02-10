// Operadores lógicos: AND (&&), OR (||) e NOT (!)
/*Atividade 01
let numero1 = Number(prompt("Digite o primeiro número: "));
let numero2 = Number(prompt("Digite o segundo número: "));

if (numero1 > 0 && numero2 > 0) {
    console.log("Ambos os números são positivos.");
}
else if (numero1 > 0 || numero2 > 0 ) {
    console.log ("Pelo menos um dos números é positivo.");
}

else {
    console.log ("Nenhum dos números é positivo.");
}


// Operadores de comparação: (==, ===, !=, !==, >, >=, <, <=)
//Atividade 02
let numero1 = Number(prompt("Digite o primeiro número: "));
let numero2 = Number(prompt("Digite o segundo número: "));

console.log(`O número ${numero1} é igual ao número ${numero2}? ${numero1 === numero2}`);
console.log(`O número ${numero1} é diferente ao número ${numero2}? ${numero1 !== numero2}`);
console.log(`O número ${numero1} é maior que o número ${numero2}? ${numero1 > numero2}`);
console.log(`O número ${numero1} é menor que o número ${numero2}? ${numero1 < numero2}`);
console.log(`O número ${numero1} é maior ou igual ao número ${numero2}? ${numero1 >= numero2}`);
console.log(`O número ${numero1} é menor ou igual ao número ${numero2}? ${numero1 <= numero2}`);


//Condicioanais:  if (se), else if (senão se), else (senão), switch (troca)
//Atividade 03
let numero = Number(prompt("Digite um número: "));

if (numero > 0) {
    console.log ("O número é positivo.");
}

else if (numero < 0) {
    console.log ("Número é negativo.");
}

else {
    console.log ("Número é zero.");
}
*/

/*Ternários Condicioanis: O operador ternário, ou operador condicional, é uma forma concisa de escrever uma instrução if-else em uma única
linha. Ele avalia uma expressão e retorna um dos dois valores com base no resultado. 
Como usar: let resultado = condição ? valorSeVerdadeiro : valorSeFalso;
*/

/*Switch
A estrutura switch avalia uma expressão e executa o bloco de código correspondente ao seu valor.
É útil para verificar múltiplos valores de uma variável ou expressão de forma clara e organizada.



//Atividade 04
// Solicitando ao usuário dois números utilizando o método prompt()
let numero1 = Number(prompt("Digite o primeiro número: "));
let numero2 = Number(prompt("Digite o segundo número: "));

// Solicitando a operação matemática que o usuário deseja realizar
let operacao = prompt("Digite a operação matemática que deseja realizar (adição, subtração, multiplicação, divisão):");

// Realizando a operação escolhida utilizando switch e exibindo o resultado
switch (operacao) {
  case "adição":
    console.log(`O resultado da adição de ${numero1} e ${numero2} é ${numero1 + numero2}`);
    break;
  case "subtração":
    console.log(`O resultado da subtração de ${numero1} e ${numero2} é ${numero1 - numero2}`);
    break;
  case "multiplicação":
    console.log(`O resultado da multiplicação de ${numero1} e ${numero2} é ${numero1 * numero2}`);
    break;
  case "divisão":
    if (numero2 !== 0) {
      console.log(`O resultado da divisão de ${numero1} por ${numero2} é ${numero1 / numero2}`);
    } else {
      console.log("Divisão por zero não é permitida.");
    }
    break;
  default:
    console.log("Operação inválida. Por favor, escolha entre adição, subtração, multiplicação ou divisão.");
}


*/