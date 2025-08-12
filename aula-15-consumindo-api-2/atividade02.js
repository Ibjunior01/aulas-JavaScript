let paginaAtual = 1;

function mudarPagina(direcao) {
  const novaPagina = paginaAtual + direcao;
  if (novaPagina < 1 || novaPagina > 3) return;

  paginaAtual = novaPagina;
  console.log(`Carregando página ${paginaAtual}...`);

  setTimeout(() => {
    fetch(`https://api.example.com/items?page=${paginaAtual}`)
      .then(res => res.json())
      .then(data => {
        console.log(`Dados da página ${paginaAtual}:`, data);
      })
      .catch(err => console.error("Erro ao carregar página:", err));
  }, 1000); // delay de 1 segundo
}