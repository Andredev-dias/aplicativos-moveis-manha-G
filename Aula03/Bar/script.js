function checkMajority(){
    var wasBorn = document.getElementById("clientBirth").valueAsNumber 
    var res = document.getElementById("result")

    if(isNaN(wasBorn)){
        res.textContent = "Digite um ano válido para verificação!"
        res.style.color = "rgba(240, 46, 170, 0.5)"
        res.style.lineHeight = "50px"
    }

    const thisYear = new Date().getFullYear()
    const age = thisYear - wasBorn
    
    if(age >= 18){
        res.textContent = "✅ - Permitido"
        res.style.color = "lightgreen"
        document.getElementById("clientAge").textContent = `${age}`
    }else{
        res.textContent = "🔞 - Sem permissão"
        res.style.color = "rgba(240, 46, 170, 0.5)"
        document.getElementById("clientAge").textContent = `${age}`
    }
}