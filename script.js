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
      picture:'<img class="img-fluid" src="images/dice-4.png" id="diceFour"">',
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

let playerActive, roundScore, gamePlaying



buttonStart.addEventListener("click", ()=>{
   console.log("buttonStart cliqué");

   activePlayer = 0;
   roundScore = 0;
   gamePlaying = true;
   
   diceSpace.innerHTML = '<img class="" src="images/rollDice.gif" id="imgRollDice" />';

   diceScorePlayerOne.innerHTML = '0';
   diceScorePlayerTwo.innerHTML = '0';
   walletPlayerOne.innerHTML = '0';
   walletPlayerTwo.innerHTML = '0';
   // document.querySelector('.player-0-panel').classList.remove('winner');
   // document.querySelector('.player-1-panel').classList.remove('winner');
   // document.querySelector('.player-0-panel').classList.remove('active');
   // document.querySelector('.player-1-panel').classList.remove('active');
   // document.querySelector('.player-0-panel').classList.add('active');

   buttonRollDice.className += "active";
   buttonHold.className += "active";
   startPlayerOne.style.color = "red";

})



buttonRollDice.addEventListener("click", ()=>{
   
   let randomNumber = Math.floor(Math.random()*dice.length);
   console.log(randomNumber);

   if(gamePlaying){

      if(dice[randomNumber]["score"] != 1){
         diceSpace.innerHTML = dice[randomNumber]["picture"] + '<p id="diceScore">Résultat: ' + dice[randomNumber]["score"] + '</p>';
         scoreStartOne += dice[randomNumber]["score"];
         diceScorePlayerOne.innerHTML = scoreStartOne;
      
         // startPlayerOne.style.color = "black";
         // startPlayerTwo.style.color = "red";
         // diceScorePlayerOne.innerHTML = 0;
         // scoreStartTwo += dice[randomNumber]["score"];
         // console.log("scorestarttwo", scoreStartTwo)
         // diceScorePlayerTwo.innerHTML = scoreStartTwo;
      } else {
         nextPlayer()
      }
   
   }




})



buttonHold.addEventListener("click", ()=>{
   if(gamePlaying){
      console.log("tt", scoreStartOne)
      walletPlayerOne.innerHTML = scoreStartOne;
      
   }
   

})



function nextPlayer() {
   //Next player
   activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
   roundScore = 0;

   document.getElementById('current-0').textContent = '0';
   document.getElementById('current-1').textContent = '0';

   document.querySelector('.player-0-panel').classList.toggle('active');
   document.querySelector('.player-1-panel').classList.toggle('active');

   //document.querySelector('.player-0-panel').classList.remove('active');
   //document.querySelector('.player-1-panel').classList.add('active');

   document.querySelector('.dice').style.display = 'none';
}
