const startOrder = document.querySelector("#startOrder")
const disclaimer = document.querySelector("#disclaimer")

let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();

let currentTime = hours + ":" + minutes

const AlmostClosed = function(){
    alert("Warning, we are about to close.")
}

const WeAreClosed = function(){
    disclaimer.innerHTML = "We are Closed. Try ordering tomorrow!"
}

// prof testing mech
// console.log("now", now)
// console.log("hours", hours)
// console.log("minutes", minutes)

if (hours === 16 && minutes >= 30 && minutes <= 59){
  startOrder.addEventListener("click", AlmostClosed)
 } else if (hours >= 17 || hours < 8) {
     startOrder.addEventListener("click", WeAreClosed)
    }else {
          " "
         }

//const Topping_JS = {
    //"Grain": ["Granola", "Chia Seeds", "Pumpkin Seeds", "Hemp Seeds"],
    //"Fruit": ["Mango", "Coconut", "Banana", "Kiwi", "Bluberries"]
//}

//for (const item in Topping_JS){
    //console.log(item)
    //for (item)
//}

    //adding item through loop
