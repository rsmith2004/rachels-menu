const startOrder = document.querySelector("#startOrder")
const disclaimer = document.querySelector("dislaimer")

let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();

let currentTime = hours + ":" + minutes

const AlmostClosed = function(){
    alert("Warning, we are about to close.")
}

const WeAreClosed = function(){
    Disclaimer.innerHTML = "We are Closed. Try ordering tomorrow!"
}

console.log("now", now)
console.log("hours", hours)
console.log("minutes", minutes)

if (hours === 16 && minutes >= 30 && minutes < 59){
  startOrder.addEventListener("click", AlmostClosed)
 } else if (hours >= 17) {
     startOrder.addEventListener("click", WeAreClosed)
    }else{
          " "
         }
