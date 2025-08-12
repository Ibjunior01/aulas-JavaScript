function buscarUsuarios() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
      console.log("Nomes dos usuários:");
      data.forEach(usuario => console.log(usuario.name));
    })
    .catch(error => console.error("Erro ao buscar usuários:", error));
}

buscarUsuarios();