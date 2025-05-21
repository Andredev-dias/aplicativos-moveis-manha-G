function somar() {
    document.getElementById("n1").style.border = "1px solid black"
    document.getElementById("n2").style.border = "1px solid black"

    var numero1 = parseFloat(document.getElementById("n1").value)
    var numero2 = parseFloat(document.getElementById("n2").value)

    var res = document.getElementById("resultadoSoma")

    if (isNaN(numero1) || isNaN(numero2)) {
        res.textContent = "Digite números para o cálculo"
        document.getElementById("n1").style.border = "3px solid red"
        document.getElementById("n2").style.border = "3px solid red"
        return
    }
    //neste caso das contas pode usar qualquer um dos tres metodos
    // res.innerHTML = numero1 + numero2
    // res.innerText = numero1 + numero2
    res.textContent = numero1 + numero2
}

function subtrair() {
    document.getElementById("n3").style.border = "1px solid black"
    document.getElementById("n4").style.border = "1px solid black"

    var numero1 = parseFloat(document.getElementById("n3").value)
    var numero2 = parseFloat(document.getElementById("n4").value)

    var res = document.getElementById("resultadoSub")

    if (isNaN(numero1) || isNaN(numero2)) {
        res.textContent = "Digite números para o cálculo"
        document.getElementById("n3").style.border = "3px solid red"
        document.getElementById("n4").style.border = "3px solid red"
        return
    }

    res.textContent = numero1 - numero2
}

function multiplicar() {
    document.getElementById("n5").style.border = "1px solid black"
    document.getElementById("n6").style.border = "1px solid black"

    var numero1 = parseFloat(document.getElementById("n5").value)
    var numero2 = parseFloat(document.getElementById("n6").value)

    var res = document.getElementById("resultadoMult")

    if (isNaN(numero1) || isNaN(numero2)) {
        res.textContent = "Digite números para o cálculo"
        document.getElementById("n5").style.border = "3px solid red"
        document.getElementById("n6").style.border = "3px solid red"
        return
    }

    res.textContent = numero1 * numero2
}

function dividir(){
    document.getElementById("n7").style.border = "1px solid black"
    document.getElementById("n8").style.border = "1px solid black"

    var numero1 = parseFloat(document.getElementById("n7").value)
    var numero2 = parseFloat(document.getElementById("n8").value)

    var res = document.getElementById("resultadoDiv")

    if (isNaN(numero1) || isNaN(numero2)) {
        res.textContent = "Digite números para o cálculo"
        document.getElementById("n7").style.border = "3px solid red"
        document.getElementById("n8").style.border = "3px solid red"
        return
    }

    if(numero2 !== 0){
        res.textContent = (numero1 / numero2).toFixed(2)
    }else{
        res.textContent = "Não permite dividir por 0"
    }
}

