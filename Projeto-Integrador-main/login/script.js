const usuario = document.querySelector(".retangulo-usuario");
const senha = document.querySelector(".retangulo-senha");
const mensagemUsuario = document.querySelector(".mensagem-1");
const mensagemSenha = document.querySelector(".mensagem-2");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (usuario.value === "") {
        mensagemUsuario.textContent = "Campo obrigatório!";
    } else {
        mensagemUsuario.textContent = ""; 
    }

    if (senha.value === "") {
        mensagemSenha.textContent = "Campo obrigatório!";
        return
    } else {
        mensagemSenha.textContent = ""; 
    }
    location.href = "../suporte/index.html";
});


const esqueceuSenha = document.querySelector(".esq-senha")

esqueceuSenha.addEventListener("click", (event) => {
    event.preventDefault();
    location.href = "../esqueceu-senha/index.html"
})