// Solicitando ao usuário dois números utilizando o método prompt()
let numero1 = Number(prompt("Digite o primeiro número: "));
let numero2 = Number(prompt("Digite o segundo número: "));

// Realizando operações aritméticas básicas
let resultado = numero1 + numero2;
console.log(`A soma de ${numero1} e ${numero2} é ${resultado}`);

resultado = numero1 - numero2;
console.log(`A subtração de ${numero1} e ${numero2} é ${resultado}`);

resultado = numero1 * numero2;
console.log(`A multiplicação de ${numero1} e ${numero2} é ${resultado}`);

resultado = numero1 / numero2;
console.log(`A divisão de ${numero1} e ${numero2} é ${resultado}`);

resultado = numero1 % numero2;
console.log(`O resto da divisão de ${numero1} por ${numero2} é ${resultado}`);

// Utilizando operadores de atribuição
resultado += numero1;  // resultado = resultado + numero1
console.log(`Resultado após adicionar ${numero1}: ${resultado}`);

resultado -= numero2;  // resultado = resultado - numero2
console.log(`Resultado após subtrair ${numero2}: ${resultado}`);

resultado *= numero1;  // resultado = resultado * numero1
console.log(`Resultado após multiplicar por ${numero1}: ${resultado}`);

resultado /= numero2;  // resultado = resultado / numero2
console.log(`Resultado após dividir por ${numero2}: ${resultado}`);
