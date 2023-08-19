let hour=document.getElementById("hrs")
let mins=document.getElementById("min")
let secs=document.getElementById("sec")
let btn=document.querySelector("button")
 mytime=()=>{
    let  mytime=new Date()
hour.innerHTML=`${mytime.getHours()}`
mins.innerHTML=`${mytime.getMinutes()}`
secs.innerHTML=`${mytime.getSeconds()}`
}
let clear=setInterval(mytime,1000)
btn.onclick=()=>{
clearInterval(clear)}