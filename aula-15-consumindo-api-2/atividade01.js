const produtos = [
  { nome: "Camisa", preco: 50 },
  { nome: "Calça", preco: 80 },
  { nome: "Sapato", preco: 120 }
];

const produtosComDesconto = produtos.map(produto => ({
  ...produto,
  preco: produto.preco * 0.9
}));

console.log("Original:", produtos);
console.log("Com desconto:", produtosComDesconto);