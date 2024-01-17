const buttonHtml = document.getElementById("bottone")
const grigliHtml = document.getElementById("griglia")
let casellaHtml = document.getElementById("casella")


const selectHtml = document.getElementById("sceltaDifficolta")



buttonHtml.addEventListener('click',function(){
    grigliHtml.classList.remove("deactivate")
    grigliHtml.classList.add("active")
})

let bombeArray = []
const numeroBombe = 16

while(bombeArray.length < numeroBombe){
   let numeroRandomico =  Math.floor((Math.random() * 16) + 1);

   if(!bombeArray.includes(numeroRandomico)){
       bombeArray.push(numeroRandomico)
   }
}



for(let i = 1; i <= 100; i++){

    let casellaHtml =  document.createElement("div")
    casellaHtml.classList = ("cubo") 
    casellaHtml.innerHTML = `<span>${i}</span>`

    casellaHtml.addEventListener('click',function(){
        this.classList.toggle("coloreUnico")
        console.log("hai cliccato sulla casella" + " " + this.innerText)
    })


    grigliHtml.appendChild(casellaHtml)

 }   


