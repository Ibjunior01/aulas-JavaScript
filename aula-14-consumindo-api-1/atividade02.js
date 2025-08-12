const produtos = [
  { nome: "Notebook", preco: 3500 },
  { nome: "Mouse", preco: 120 },
  { nome: "Teclado", preco: 250 }
];

const jsonProdutos = JSON.stringify(produtos);
console.log("Array de produtos convertido em JSON:", jsonProdutos);