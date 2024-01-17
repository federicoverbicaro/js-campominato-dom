const buttonHtml = document.getElementById("bottone")
const grigliHtml = document.getElementById("griglia")
let casellaHtml = document.getElementById("casella")
const buttonRestart = document.getElementById("restart")
const selectHtml = document.getElementById("sceltaDifficolta")


buttonHtml.addEventListener('click',function(){
    grigliHtml.classList.remove("deactivate")
    grigliHtml.classList.add("active")
})


let bombeArray = []
let numeroBombe = 16

while (bombeArray.length < numeroBombe){
    const numeroCasuale = Math.floor(Math.random() * 100) + 1
    if (!bombeArray.includes(numeroCasuale)){
        bombeArray.push(numeroCasuale)
    }
}




for(let i = 1; i <= 100; i++){

    let casellaHtml =  document.createElement("div")
    casellaHtml.classList = ("cubo") 
    casellaHtml.innerHTML = `<span>${i}</span>`

    casellaHtml.addEventListener('click',function(){
       
        const numeroCasella = parseInt(this.innerText)

        if(bombeArray.includes(numeroCasella)){
            this.style.backgroundColor = "red"
            console.log("Hai calpestato una bomba! Partita terminata.")
        }else{
            this.classList.toggle("coloreUnico")
            console.log("la cella non e una bomba. continua il gioco")
        }

       
    })

    

    grigliHtml.appendChild(casellaHtml)

 }   



buttonRestart.addEventListener('click', function(){
    bombeArray = []
  
    const celle = document.querySelectorAll(".cubo")
    celle.forEach(casella => {
        casella.style.backgroundColor = "";
        casella.classList.remove("coloreUnico")
    })

    while (bombeArray.length < numeroBombe){
        const numeroCasuale = Math.floor(Math.random() * 100) + 1
        if (!bombeArray.includes(numeroCasuale)){
            bombeArray.push(numeroCasuale)
        }
    }
    
  })

