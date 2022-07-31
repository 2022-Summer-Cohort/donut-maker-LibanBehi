import DonutMaker from "./DonutMaker.js";

let donutMaker = new DonutMaker(0,0,0);
const donutCountEl= document.querySelector("#donutcount");
const autoClickersEl = document.querySelector("#autoclickers");
const donutMultiplierEl = document.querySelector("#donutmultipliercount");
const autoClickersCostEl = document.querySelector("#autoclickerscost");
const donutMultiplierCostEl = document.querySelector("#donutmultipliercost");
let button = document.querySelector("#bakeDonut");
button.addEventListener("click", function(){
  donutMaker.bakeDonut();
  donutCountEl.innerText = Math.round(donutMaker.donutCount); 
})
let autoClickerBtn = document.querySelector("#buyautoclickers");
autoClickerBtn.addEventListener("click", function(){
donutMaker.buyautoclicker()
donutCountEl.innerText = Math.round(donutMaker.donutCount);
autoClickersEl.innerText = donutMaker.autoClickers;
autoClickersCostEl.innerText = Math.round(donutMaker.autoClickersCost);


})

let multiplierBtn = document.querySelector("#buydonutmultiplier");
multiplierBtn.addEventListener("click", function(){
  donutMaker.buydonutmultiplier();
  donutMultiplierEl.innerText = donutMaker.donutMultiplier;
  donutCountEl.innerText = Math.round(donutMaker.donutCount);
  donutMultiplierCostEl.innerText = Math.round(donutMaker.donutMultiplierCost);

})
setInterval(() => {
  for(let i=0;i<donutMaker.autoClickers;i++){
    donutMaker.bakeDonut();
  }
  donutCountEl.innerText = Math.round(donutMaker.donutCount);
  },1000);

  let resetBtn = document.querySelector(".reset");
  resetBtn.addEventListener("click", function(){
  donutMaker.resetBtn();
  autoClickersEl.innerText = donutMaker.autoClickers;
  donutMultiplierEl.innerText = donutMaker.donutMultiplier;
  donutCountEl.innerText = Math.round(donutMaker.donutCount);

  })
  let modal = document.getElementById("myModal");

  
  let btn = document.getElementById("MyBtn");
  

  let span = document.getElementsByClassName("close")[0];
  

  btn.onclick = function() {
    modal.style.display = "block";
  }
  

  span.onclick = function() {
    modal.style.display = "none";
  }
 
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

