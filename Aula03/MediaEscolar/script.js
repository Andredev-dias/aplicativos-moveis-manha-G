function media(){
    var n1 = parseFloat(document.getElementById("n1").value)
    var n2 = parseFloat(document.getElementById("n2").value)
    var n3 = parseFloat(document.getElementById("n3").value)
    var n4 = parseFloat(document.getElementById("n4").value)
    var n5 = parseFloat(document.getElementById("n5").value)
    var media = document.getElementById("respMedia")
    var msg = document.getElementById("msg")
    var res = (n1 + n2 + n3 + n4 + n5) / 5

    if(res >= 7){
        media.style.display = "flex"
        media.textContent = res
        media.style.border = "3px solid green"
        media.style.background = "lightgreen"
        media.style.borderRadius = "100%"
        msg.textContent = "Aprovado"
        msg.style.color = "green"
    }else{
        media.style.display = "flex"
        media.textContent = res
        media.style.border = "3px solid red"
        media.style.background = "lightpink"
        media.style.borderRadius = "100%"
        msg.textContent = "Reprovado"
        msg.style.color = "red"
    }
}