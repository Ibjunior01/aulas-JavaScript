let listaDeCompras = [];

// Função para exibir o menu e solicitar uma ação do usuário
function mostrarMenu() {
    console.log('Gerenciardor de lista de compras: ');
    console.log('1. Adiconar item');
    console.log('2. Remover item');
    console.log('3. Exibir lista');
    console.log('4. Atualizar item');
    console.log('5. Sair');

    let escolha = prompt('Escolha uma opção (1 - 5):');
    return escolha;
}

// Função para adicionar um item à lista
function adicionarItem() {
    let item  = prompt('Digite o nome do item a ser adicionado: ');
    listaDeCompras.push(item);
    console.log(`Item "${item}" adicionado a lista.`);
}

// Função para remover um item da lista
function removerItem() {
    let indice = Number(prompt('Digite o índice do item a ser removido: ')) - 1;
    if (indice >= 0 && indice < listaDeCompras.length) {
        let itemRemovido = listaDeCompras.splice(indice, 1);
    }
    else {
        console.log('Índice inválido.');
    }
}

// Função para exibir a lista de compras
function exibirLista() {
    console.log("Lista de Compras:");
    for (let i = 0; i < listaDeCompras.length; i++) {
      console.log(`${i + 1}: ${listaDeCompras[i]}`);
    }
  }
  
  // Função para atualizar um item da lista
  function atualizarItem() {
    let indice = Number(prompt("Digite o índice do item a ser atualizado:")) - 1;
    if (indice >= 0 && indice < listaDeCompras.length) {
      let novoItem = prompt("Digite o novo valor do item:");
      listaDeCompras[indice] = novoItem;
      console.log(`Item no índice ${indice + 1} atualizado para "${novoItem}".`);
    } else {
      console.log("Índice inválido.");
    }
  }
  
  // Função principal para gerenciar a lista de compras
  function gerenciarListaDeCompras() {
    while (true) {
      let escolha = mostrarMenu();
      switch (escolha) {
        case "1":
          adicionarItem();
          break;
        case "2":
          removerItem();
          break;
        case "3":
          exibirLista();
          break;
        case "4":
          atualizarItem();
          break;
        case "5":
          console.log("Saindo do gerenciador de lista de compras.");
          return;
        default:
          console.log("Opção inválida. Tente novamente.");
      }
    }
  }
  
  // Iniciando o gerenciador de lista de compras
  gerenciarListaDeCompras();