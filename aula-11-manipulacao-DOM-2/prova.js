document.getElementById("formulario").addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const senha = document.getElementById("senha").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const nascimento = document.getElementById("nascimento").value;
  const email = document.getElementById("email").value.trim();

  if (!nome || !senha || !telefone || !nascimento || !email) {
    console.error("Todos os campos devem ser preenchidos.");
    return;
  }

  const li = document.createElement("li");
  li.textContent = `Nome: ${nome}, Telefone: ${telefone}, Nascimento: ${nascimento}, Email: ${email}`;
  document.getElementById("listaDados").appendChild(li);

  e.target.reset();
});

document.getElementById("limpar").addEventListener("click", () => {
  document.getElementById("listaDados").innerHTML = "";
});