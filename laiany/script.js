const nome= document.getElementById("nome")
const nome= document.getElementById("senha")
const botaocadrastro= document.getElementById("confirmar")
const email= document.getElementById("email")
const idade= document.getElementById("idade")
const numero= document.getAnimations("numero")

confirmar.addEventListener("click", function(){
const nomeUsuario=usuario.value;
const senhadigitada=senha.value;

if(nomeUsuario === "admin" && senhaDigitada === "1234"){

    alert("login realizado com sucesso!");
}else ef{
    alert("usuario ou senha incorretas!")
}
if (nomeUsuario === "" || senhaDigitada === "") {
    alert("Preencha todos os campos!");
}
});