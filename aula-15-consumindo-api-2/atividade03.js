fetch("https://api.example.com/dados")
  .then(response => {
    if (response.ok) {
      return response.json();
    } else if (response.status === 404) {
      throw new Error("Recurso não encontrado");
    } else {
      throw new Error("Erro ao carregar os dados");
    }
  })
  .then(data => console.log("Dados recebidos:", data))
  .catch(error => console.error(error.message));