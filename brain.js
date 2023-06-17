const btn1=document.getElementById("btn1")
const btn2=document.getElementById("btn2")
const btn3=document.getElementById("btn3")
const quotes=["dnya raht w ana rani jay oi rayh  ","9alk wah tah matt 3wd zl9 nad rah oi 3wd wla  ","aya whd lkhta whf tfol b3ttao ymah ychri zitoun ","ynnsss is the worst designer "]
const next=document.querySelector(".read")
const message=document.querySelector(".message")
const add_fav=document.querySelector(".mark-as-read")
const card=document.querySelector(".card")
const fav=document.querySelector(".favori")
const div=document.querySelector(".div")
const box=document.getElementById("l")
const element = document.createElement('li');
let ktiba;
let random=Math.floor(Math.random()*quotes.length)

next.addEventListener("click",()=>{
    let random=Math.floor(Math.random()*quotes.length)
    ktiba=quotes[random]
    message.textContent=ktiba
})
btn2.addEventListener("click",()=>{
    card.style.display="none"
    fav.style.display="flex"
    add_fav.style.display="none"
    next.style.display="none"
});
btn1.addEventListener("click",()=>{
    card.style.display="block"
    fav.style.display="none"
    add_fav.style.display="inline-block"
    next.style.display="inline-block"
   
});

add_fav.addEventListener("click",()=>{
    fav.innerHTML+=`<li>${ktiba}</li>
    
    `
   
})




