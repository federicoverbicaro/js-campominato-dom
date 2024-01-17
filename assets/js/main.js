const buttonHtml = document.getElementById("bottone")
const grigliHtml = document.getElementById("griglia")
let casellaHtml = document.getElementById("casella")



buttonHtml.addEventListener('click',function(){
    grigliHtml.classList.remove("deactivate")
    grigliHtml.classList.add("active")

         
})


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
 

