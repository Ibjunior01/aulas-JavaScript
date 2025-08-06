const caixas = document.querySelectorAll(".box");
const cores = ["lightblue", "lightgreen", "lightcoral"];

caixas.forEach((div, index) => {
  div.style.backgroundColor = cores[index];
});