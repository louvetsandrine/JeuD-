const buttonStart = document.getElementById("buttonStart");
// const buttonRules = document.getElementById("buttonRules");
const startPlayerOne = document.getElementById("startPlayerOne");
const startPlayerTwo = document.getElementById("startPlayerTwo");
const textPlayerOne = document.getElementById("textPlayerOne");
const textPlayerTwo = document.getElementById("textPlayerTwo");
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

// var scoreStartOne = 0;
// var scoreStartTwo = 0;

var playerActive, roundScore, gamePlaying, walletOne = 0, walletTwo = 0;

buttonStart.addEventListener("click", ()=>{
   console.log("buttonStart cliqué");

   activePlayer = "One";
   roundScore = 0;
   gamePlaying = true;
   
   diceSpace.innerHTML = '<img class="" src="images/rollDice.gif" id="imgRollDice" />';

   diceScorePlayerOne.innerHTML = "0";
   diceScorePlayerTwo.innerHTML = "0";
   walletPlayerOne.innerHTML = "0";
   walletPlayerTwo.innerHTML = "0";
   buttonRollDice.className += "active";
   buttonHold.className += "active";
   startPlayerOne.classList.toggle("startPlayerButton");
   textPlayerOne.classList.toggle("startPlayerButton");
   textPlayerTwo.classList.remove("startPlayerButton");
   
})



buttonRollDice.addEventListener("click", ()=>{
   console.log("activeplayer", activePlayer);

   var randomNumber = Math.floor(Math.random()*dice.length);
   
   console.log(randomNumber);
   console.log("roundscore", roundScore);
   diceSpace.innerHTML = dice[randomNumber]["picture"] + '<p id="diceScore">Résultat: ' + (randomNumber+1) + '</p>';

   if(gamePlaying){

      if( (randomNumber+1) !== 1){
         
         roundScore += (randomNumber + 1);
         console.log("roundScore += randomNumber: ", roundScore);
         document.getElementById("diceScorePlayer" + activePlayer).innerHTML = roundScore;
      } else {
         nextPlayer()
      }
   }
})



buttonHold.addEventListener("click", ()=>{
   if(gamePlaying){
      activePlayer === "One" ? (walletOne += roundScore) : (walletTwo += roundScore);

      activePlayer === "One" ? (document.getElementById("walletPlayerOne").innerHTML = walletOne) : (document.getElementById("walletPlayerTwo").innerHTML = walletTwo);
      
      if (walletOne >= 10 || walletTwo >= 10) {
         activePlayer === "One" ?(document.getElementsByClassName("containerScore")[0].innerHTML = '<div style = "margin-top: 50vh;transform: translateY(-50%); font-size: 30px; text-align: center; color: white; font-weight: 800; ">Félicitations, <span style = "font-weight: 800; color: red; font-size: 30px; margin-left: 5px; "> Joueur n°1</span>, vous avez gagné!!</div>') : 
         (diceSpace.innerHTML = '<p style = "font-size: 30px;">Félicitations, <span style = "font-weight: 800; color: red; font-size: 30px">Joueur n°2</span>, vous avez gagné<p/>');
         buttonRollDice.classList.remove("active");
         buttonHold.classList.remove("active");
        
         // document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
         // document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
         gamePlaying = false;
     } else {
         //Next player
         nextPlayer();
     }
      
   }
})



function nextPlayer() {
   //Next player
   activePlayer === "One" ? activePlayer = "Two" : activePlayer = "One";
   roundScore = 0;

   console.log("textplayerone", textPlayerOne)

   document.getElementById("diceScorePlayerOne").innerHTML = "0";
   document.getElementById("diceScorePlayerTwo").innerHTML = "0";
   startPlayerOne.classList.toggle("startPlayerButton");
   startPlayerTwo.classList.toggle("startPlayerButton");
   textPlayerOne.classList.toggle("startPlayerButton");
   textPlayerTwo.classList.toggle("startPlayerButton");

     

   // document.querySelector('.player-0-panel').classList.toggle('active');
   // document.querySelector('.player-1-panel').classList.toggle('active');

   //document.querySelector('.player-0-panel').classList.remove('active');
   //document.querySelector('.player-1-panel').classList.add('active');

   // document.querySelector('.dice').style.display = 'none';

   // diceSpace.innerHTML = dice[0]["picture"] + '<p id="diceScore">Résultat: 1</p>';

}
