function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function exibirTabela(produtosPorCategoria) {
  const container = document.getElementById("tabela");
  container.innerHTML = "";

  for (const categoria in produtosPorCategoria) {
    const produtos = produtosPorCategoria[categoria];
    const html = `
      <h3>${categoria}</h3>
      <table border="1">
        <tr><th>Nome</th><th>Preço</th></tr>
        ${produtos.map(p => `<tr><td>${p.nome}</td><td>${p.preco}</td></tr>`).join("")}
      </table>
    `;
    container.innerHTML += html;
  }
}

fetch("https://api.example.com/produtos")
  .then(res => res.json())
  .then(data => {
    const transformados = data.map(p => ({
      nome: p.nome,
      preco: formatarPreco(p.preco),
      categoria: p.categoria
    }));

    const agrupados = transformados.reduce((acc, produto) => {
      if (!acc[produto.categoria]) acc[produto.categoria] = [];
      acc[produto.categoria].push(produto);
      return acc;
    }, {});

    console.log("Agrupados por categoria:", agrupados);
    exibirTabela(agrupados);
  })
  .catch(err => console.error("Erro ao carregar produtos:", err));