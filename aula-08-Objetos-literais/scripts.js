//Atividade 01 Criar e acessar propriedades de um objeto
const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2020
};

console.log("Marca:", carro.marca);
console.log("Modelo:", carro.modelo);
console.log("Ano:", carro.ano);

//Atividade 02 – Alterar e adicionar propriedades
const pessoa = {
  nome: "Ana",
  idade: 28,
  profissao: "Designer"
};

// Alterando a profissão
pessoa.profissao = "Desenvolvedora";

// Adicionando nova propriedade
pessoa.cidade = "Fortaleza";

console.log("Pessoa atualizada:", pessoa);

// Atividade 03 – Desestruturação de objeto
const livro = {
  titulo: "O Alquimista",
  autor: "Paulo Coelho",
  ano: 1988,
  editora: "HarperCollins"
};

// Desestruturação
const { titulo, autor } = livro;

console.log("Título:", titulo);
console.log("Autor:", autor);

// Atividade 04 – Array de objetos e manipulação
let livros = [
  { titulo: "1984", autor: "George Orwell" },
  { titulo: "Dom Casmurro", autor: "Machado de Assis" }
];

// Exibir todos os títulos
livros.forEach(livro => console.log("Título:", livro.titulo));

// Adicionar novo livro
livros.push({ titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry" });

console.log("Lista completa de livros:", livros);

//Atividade 05 – Combinar objetos com spread operator
const carro1 = {
  marca: "Ford",
  modelo: "Fiesta",
  ano: 2015
};

const carro2 = {
  marca: "Chevrolet",
  modelo: "Onix",
  ano: 2022
};

// Combinar objetos (último sobrescreve propriedades iguais)
const carroCombinado = { ...carro1, ...carro2 };

console.log("Carro combinado:", carroCombinado);