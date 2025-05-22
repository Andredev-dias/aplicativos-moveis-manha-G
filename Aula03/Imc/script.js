function calcIMC(){
    var peso = parseFloat(document.getElementById("peso").value)
    var altura = parseFloat(document.getElementById("altura").value)
    var resposta = document.getElementById("res")
    if(isNaN(peso) || isNaN(altura)){
        resposta.textContent = "Digite números para calcular o seu Índice de massa corporal"
        document.getElementById("msg").textContent = " "
    }
}