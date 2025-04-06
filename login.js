// Dados do administrador (usuário e senha armazenados no código)
const credenciaisAdmin = {
    usuario: "admin",  // Usuário do administrador
    senha: "123456"    // Senha do administrador
};

// Função para verificar o login
function verificarLogin(event) {
    event.preventDefault();  // Evita o envio do formulário

    // Obtendo os valores dos campos de usuário e senha
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const erroMensagem = document.getElementById("erro-mensagem");

    // Verificando se as credenciais estão corretas
    if (usuario === credenciaisAdmin.usuario && senha === credenciaisAdmin.senha) {
        // Armazenando a informação de que o admin está logado
        localStorage.setItem('adminLogado', 'true');
        window.location.href = "admin.html";  // Redireciona para a tela administrativa
    } else {
        erroMensagem.textContent = "Usuário ou senha inválidos. Tente novamente.";
    }
}

// Adicionando o evento ao formulário de login
document.getElementById("loginForm").addEventListener("submit", verificarLogin);
