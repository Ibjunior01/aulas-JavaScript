document.getElementById("formCadastro").addEventListener("submit", function (e) {
  e.preventDefault();

  // Limpa mensagens anteriores
  const camposErro = ["erroNome", "erroUsuario", "erroSenha", "erroEmail", "erroIdade"];
  camposErro.forEach(id => document.getElementById(id).textContent = "");
  document.getElementById("mensagemSucesso").textContent = "";

  // Captura os valores
  const nome = document.getElementById("nome").value.trim();
  const usuario = document.getElementById("usuario").value.trim();
  const senha = document.getElementById("senha").value.trim();
  const email = document.getElementById("email").value.trim();
  const idade = parseInt(document.getElementById("idade").value);

  try {
    // Validações
    if (!nome) throw { campo: "erroNome", mensagem: "Nome é obrigatório." };
    if (nome.length < 3) throw { campo: "erroNome", mensagem: "Nome deve ter pelo menos 3 caracteres." };

    if (!usuario) throw { campo: "erroUsuario", mensagem: "Usuário é obrigatório." };
    if (usuario.length < 4) throw { campo: "erroUsuario", mensagem: "Usuário deve ter pelo menos 4 caracteres." };

    if (!senha) throw { campo: "erroSenha", mensagem: "Senha é obrigatória." };
    if (senha.length < 6) throw { campo: "erroSenha", mensagem: "Senha deve ter pelo menos 6 caracteres." };

    if (!email) throw { campo: "erroEmail", mensagem: "Email é obrigatório." };
    if (!email.includes("@") || !email.includes(".")) throw { campo: "erroEmail", mensagem: "Email inválido." };

    if (isNaN(idade)) throw { campo: "erroIdade", mensagem: "Idade deve ser um número." };
    if (idade < 18) throw { campo: "erroIdade", mensagem: "Você deve ter 18 anos ou mais." };

    // Se tudo estiver certo
    document.getElementById("mensagemSucesso").textContent = "✅ Cadastro realizado com sucesso!";
  } catch (erro) {
    // Exibe erro no campo correspondente
    document.getElementById(erro.campo).textContent = erro.mensagem;
  } finally {
    console.log("Validação de cadastro concluída.");
  }
});