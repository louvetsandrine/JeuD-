const buttonStart = document.getElementById("buttonStart");
const startPlayerOne = document.getElementById("startPlayerOne");
const startPlayerTwo = document.getElementById("startPlayerTwo");
const buttonRollDice = document.getElementById("buttonRollDice");
const buttonHold = document.getElementById("buttonHold");
const diceSpace = document.getElementById("diceSpace");
const diceScore = document.getElementById("diceScore");
const diceOnce = document.getElementById("diceOne");
const diceTwo = document.getElementById("diceTwo");
const diceThree = document.getElementById("diceThree");
const diceFour = document.getElementById("diceFour");
const diceFive = document.getElementById("diceFive");
const diceSix = document.getElementById("diceSix");
const diceScorePlayerOne = document.getElementById("diceScorePlayerOne");
const diceScorePlayerTwo = document.getElementById("diceScorePlayerTwo");
const walletPlayerOne = document.getElementById("walletPlayerOne");
const walletPlayerTwo = document.getElementById("walletPlayerTwo");

const dice = [ 
   {
      picture:'<img class="img-fluid" src="images/dice-1.png" id="diceOne"/>', 
      score:1
   },
   {
      picture:'<img class="img-fluid" src="images/dice-2.png" id="diceTwo"/>',
      score:2
   },
   {
      picture:'<img class="img-fluid" src="images/dice-3.png" 0" id="diceThree"/>',
      score:3
   },
   {
      picture:'<img class="img-fluid" src="images/dice-4.png" id="diceFour"/>',
      score:4
   },
   {
      picture:'<img class="img-fluid" src="images/dice-5.png" id="diceFive"/>',
      score:5
   },
   {
      picture:'<img class="img-fluid" src="images/dice-6.png" id="diceSix"/>',
      score:6
   }
]

let scoreStartOne = 0;
let scoreStartTwo = 0;
let player = "one";



buttonStart.addEventListener("click", ()=>{
   console.log("buttonStart cliqué");

   buttonStart.className += " disabled";
   buttonRollDice.className += "active";
   buttonHold.className += "active";
   startPlayerOne.style.color = "red";

})

buttonRollDice.addEventListener("click", ()=>{

   player = player == "one"? "two" : "one";
   
   let randomNumber = Math.floor(Math.random()*dice.length);
   console.log(randomNumber);

   diceSpace.innerHTML = dice[randomNumber]["picture"] + '<p id="diceScore">Résultat: ' + dice[randomNumber]["score"] + '</p>';
   scoreStartOne += dice[randomNumber]["score"];
   diceScorePlayerOne.innerHTML = scoreStartOne;

   if(dice[randomNumber]["score"] === 1){
      startPlayerOne.style.color = "black";
      startPlayerTwo.style.color = "red";
      diceScorePlayerOne.innerHTML = 0;
      scoreStartTwo += dice[randomNumber]["score"];
      diceScorePlayerTwo.innerHTML = scoreStartTwo;
   }


})



buttonHold.addEventListener("click", ()=>{
   
   console.log("tt", scoreStartOne)
   walletPlayerOne.innerHTML = scoreStartOne;

})