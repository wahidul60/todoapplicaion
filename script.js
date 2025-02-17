let cardText=document.querySelector(".card-text")
let btn=document.querySelector(".btn")
let cardTittle=document.querySelector(".card-title")
let card=document.querySelectorAll(".card")
console.log(card)

let arr=[]

card.innerHTML="Wahidul"

btn.addEventListener("click",function(){
    cardTittle.innerHTML=`<h1> ${arr[0].taskName}</h1>`
})



