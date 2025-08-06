document.getElementById("adicionarItem").addEventListener("click", () => {
  const input = document.getElementById("itemInput");
  const texto = input.value.trim();
  if (texto === "") return;

  const li = document.createElement("li");
  li.textContent = texto;
  document.getElementById("lista").appendChild(li);
  input.value = "";
});