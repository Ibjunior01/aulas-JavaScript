//Gerenciador de Nomes com Métodos de Arra
let listaDeNomes = [];

function mostrarMenu() {
  console.log("\n--- Menu ---");
  console.log("1. Adicionar nome");
  console.log("2. Filtrar nomes por letra inicial");
  console.log("3. Buscar um nome específico");
  console.log("4. Transformar nomes em maiúsculas");
  console.log("5. Verificar se todos os nomes têm mais de 3 letras");
  console.log("6. Sair");
}

const prompt = require("prompt-sync")(); // usar 'prompt-sync' no Node.js

let continuar = true;

while (continuar) {
  mostrarMenu();
  const opcao = prompt("Escolha uma opção: ");

  switch (opcao) {
    case "1":
      const novoNome = prompt("Digite um nome para adicionar: ");
      listaDeNomes.push(novoNome);
      console.log("Lista atualizada:", listaDeNomes);
      break;

    case "2":
      const letra = prompt("Digite a letra inicial para filtrar os nomes: ");
      const nomesFiltrados = listaDeNomes.filter((nome) =>
        nome.toLowerCase().startsWith(letra.toLowerCase())
      );
      console.log("Nomes filtrados:", nomesFiltrados);
      break;

    case "3":
      const nomeBusca = prompt("Digite o nome a ser buscado: ");
      const resultado = listaDeNomes.find((nome) => nome === nomeBusca);
      console.log(
        resultado ? `Nome encontrado: ${resultado}` : "Nome não encontrado."
      );
      break;

    case "4":
      const nomesMaiusculos = listaDeNomes.map((nome) => nome.toUpperCase());
      console.log("Nomes em maiúsculas:", nomesMaiusculos);
      break;

    case "5":
      const todosTemMaisDeTres = listaDeNomes.every(
        (nome) => nome.length > 3
      );
      console.log(
        todosTemMaisDeTres
          ? "Todos os nomes têm mais de 3 letras."
          : "Algum nome tem 3 letras ou menos."
      );
      break;

    case "6":
      console.log("Encerrando o programa.");
      continuar = false;
      break;

    default:
      console.log("Opção inválida. Tente novamente.");
  }
}

/*
- Para rodar esse script, você pode usar Node.js com a biblioteca prompt-sync. Instale usando:
npm install prompt-sync

node prova07.js

*/