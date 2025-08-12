let paginaAtual = 1;
let filtrarEstoque = false;

function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function formatarData(dataStr) {
  const data = new Date(dataStr);
  return data.toLocaleDateString("pt-BR");
}

function ativarFiltro() {
  filtrarEstoque = !filtrarEstoque;
  carregarProdutos();
}

function mudarPagina(direcao) {
  const novaPagina = paginaAtual + direcao;
  if (novaPagina < 1) return;
  paginaAtual = novaPagina;
  carregarProdutos();
}

function carregarProdutos() {
  fetch(`https://api.example.com/produtos?page=${paginaAtual}`)
    .then(response => {
      if (!response.ok) throw new Error("Erro na resposta da API");
      return response.json();
    })
    .then(data => {
      let produtos = data;
      if (filtrarEstoque) {
        produtos = produtos.filter(p => p.estoque > 0);
      }

      const tbody = document.querySelector("#tabela tbody");
      tbody.innerHTML = "";

      produtos.forEach(p => {
        const linha = `
          <tr>
            <td>${p.nome}</td>
            <td>${formatarPreco(p.preco)}</td>
            <td>${p.estoque}</td>
            <td>${formatarData(p.dataLancamento)}</td>
          </tr>
        `;
        tbody.innerHTML += linha;
      });
    })
    .catch(err => {
      console.error(err.message);
      document.querySelector("#tabela tbody").innerHTML = `<tr><td colspan="4">Erro ao carregar produtos</td></tr>`;
    });
}

carregarProdutos();