function criarPost() {
  const novoPost = {
    title: "Meu primeiro post",
    body: "Este é o conteúdo do post.",
    userId: 1
  };

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(novoPost)
  })
    .then(response => response.json())
    .then(data => {
      console.log("Post criado com sucesso:");
      console.log(data);
    })
    .catch(error => console.error("Erro ao criar post:", error));
}

criarPost();