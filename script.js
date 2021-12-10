const buttonStart = document.getElementById("startButton");
const startPlayerOne = document.getElementById("startPlayerOne");
const buttonRollDice = document.getElementById("buttonRollDice");
const buttonHold = document.getElementById("buttonHold");
const diceSpae = document.getElementById("diceSpace");


buttonStart.addEventListener("click", ()=>{
   startPlayerOne.style.color = "red"


})

buttonRollDice.addEventListener("click", ()=>{
   diceSpae.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-dice-2" viewBox="0 0 16 16"><path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/><path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>     '
   


})

buttonHold.addEventListener("click", ()=>{
   
   


})