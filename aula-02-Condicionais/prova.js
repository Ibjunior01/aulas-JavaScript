// Solicitando ao usuário a idade e o status de registro utilizando prompt()
let idade = Number(prompt("Digite sua idade: "));
let status = prompt("Digite seu status de registro (registrado ou não registrado):").toLowerCase();

// Usando um operador ternário para determinar se o usuário é maior de idade ou menor de idade
let maiorDeIdade = (idade >= 18) ? true : false;

// Utilizando uma estrutura switch para exibir uma mensagem personalizada com base no status do usuário
switch (status) {
  case "registrado":
    console.log("Bem-vindo ao sistema!");
    break;
  case "não registrado":
    console.log("Por favor, complete seu registro.");
    break;
  default:
    console.log("Status desconhecido.");
}

// Adicionando lógica com operadores lógicos para verificar o acesso do usuário
if (maiorDeIdade && status === "registrado") {
  console.log("Você tem acesso completo.");
} else {
  console.log("Seu acesso é limitado.");
}
