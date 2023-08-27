let colors=["green","red","rgba(133,122,200)","#f15025","yellow","pink","grey",];
let color =document.querySelector(".color")
let btn =document.querySelector("button")
 btn.onclick=()=>{
    let randomNumber=getRandomNumber();
    document.body.style.backgroundColor=colors[randomNumber];
    color.textContent=colors[randomNumber];
 };
 let getRandomNumber=()=>{
    return Math.floor(
        Math.random()*colors.length);
 }

