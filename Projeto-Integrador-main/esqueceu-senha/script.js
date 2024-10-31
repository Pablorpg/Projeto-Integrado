const enviar = document.querySelector(".botao-enviar");
const usuario = document.querySelector(".retangulo-usuario");
const mensagem = document.querySelector(".mensagem");

enviar.addEventListener("click", (event) => {
    event.preventDefault();

    if (usuario.value === "") {
        mensagem.textContent = "Campo obrigatório!";
    } else {
        mensagem.textContent = "";
        location.href = "../novidades/index.html"; 
    }
});
