let listaDeNomes = [];

function mostrarMenu() {
  return (
    "\n--- Menu ---\n" +
    "1. Adicionar nome\n" +
    "2. Filtrar nomes por letra inicial\n" +
    "3. Buscar um nome específico\n" +
    "4. Transformar nomes em maiúsculas\n" +
    "5. Verificar se todos os nomes têm mais de 3 letras\n" +
    "6. Sair"
  );
}

let continuar = true;

while (continuar) {
  const opcao = prompt(mostrarMenu() + "\n\nEscolha uma opção:");

  switch (opcao) {
    case "1":
      const novoNome = prompt("Digite um nome para adicionar:");
      listaDeNomes.push(novoNome);
      alert("Nome adicionado!\nLista atualizada:\n" + listaDeNomes.join(", "));
      break;

    case "2":
      const letra = prompt("Digite a letra inicial para filtrar os nomes:");
      const nomesFiltrados = listaDeNomes.filter((nome) =>
        nome.toLowerCase().startsWith(letra.toLowerCase())
      );
      alert(
        nomesFiltrados.length
          ? "Nomes filtrados:\n" + nomesFiltrados.join(", ")
          : "Nenhum nome encontrado com essa letra."
      );
      break;

    case "3":
      const nomeBusca = prompt("Digite o nome a ser buscado:");
      const resultado = listaDeNomes.find((nome) => nome === nomeBusca);
      alert(
        resultado
          ? `Nome encontrado: ${resultado}`
          : "Nome não encontrado."
      );
      break;

    case "4":
      const nomesMaiusculos = listaDeNomes.map((nome) => nome.toUpperCase());
      alert("Nomes em maiúsculas:\n" + nomesMaiusculos.join(", "));
      break;

    case "5":
      const todosTemMaisDeTres = listaDeNomes.every((nome) => nome.length > 3);
      alert(
        todosTemMaisDeTres
          ? "Todos os nomes têm mais de 3 letras."
          : "Algum nome tem 3 letras ou menos."
      );
      break;

    case "6":
      alert("Encerrando o programa.");
      continuar = false;
      break;

    default:
      alert("Opção inválida. Tente novamente.");
  }
}