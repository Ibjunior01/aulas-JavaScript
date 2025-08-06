const paragrafos = document.getElementsByTagName("p");
for (let i = 0; i < paragrafos.length; i++) {
  paragrafos[i].textContent = "Texto alterado";
}