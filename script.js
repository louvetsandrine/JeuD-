const buttonStart = document.getElementById("buttonStart");
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
      picture:'<img class="img-fluid" src="images/dice-1.png" id="diceOne" alt="Dé n°1"/>', 
      score:1
   },
   {
      picture:'<img class="img-fluid" src="images/dice-2.png" id="diceTwo" alt="Dé n°2"/>',
      score:2
   },
   {
      picture:'<img class="img-fluid" src="images/dice-3.png" 0" id="diceThree" alt="Dé n°3"/>',
      score:3
   },
   {
      picture:'<img class="img-fluid" src="images/dice-4.png" id="diceFour" alt="Dé n°4"/>',
      score:4
   },
   {
      picture:'<img class="img-fluid" src="images/dice-5.png" id="diceFive" alt="Dé n°5"/>',
      score:5
   },
   {
      picture:'<img class="img-fluid" src="images/dice-6.png" id="diceSix" alt="Dé n°6"/>',
      score:6
   }
]


var playerActive, roundScore, gamePlaying, walletOne, walletTwo;

buttonStart.addEventListener("click", ()=>{

   activePlayer = "One";
   roundScore = 0;
   walletOne = 0;
   walletTwo = 0;
   gamePlaying = true;
   
   diceSpace.innerHTML = '<img class="" src="images/rollDice.gif" id="imgRollDice" alt="Lancé de dé" />';
   diceScorePlayerOne.innerHTML = "0";
   diceScorePlayerTwo.innerHTML = "0";
   walletPlayerOne.innerHTML = "0";
   walletPlayerTwo.innerHTML = "0";
   buttonRollDice.classList.replace( "disabled", "active" );
   buttonHold.classList.replace( "disabled", "active" );
   startPlayerOne.classList.toggle("startPlayerButton");
   startPlayerTwo.classList.remove("startPlayerButton");
   textPlayerOne.classList.add("startPlayerButton");
   textPlayerTwo.classList.remove("startPlayerButton");
   document.getElementsByClassName("alert")[0].style.display = "none";
})



buttonRollDice.addEventListener("click", ()=>{

   var randomNumber = Math.floor(Math.random()*dice.length);
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
         document.getElementsByClassName("alert")[0].style.display = "block";
         activePlayer === "One" ?(document.getElementsByClassName("alert")[0].innerHTML = '<p style = "font-size: 30px;">Félicitations, <span style = "font-weight: 800; color: red; font-size: 30px">Joueur n°1</span>, vous avez gagné!! <i class="fas fa-glass-cheers"></i><p/> <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>') : 
         (document.getElementsByClassName("alert")[0].innerHTML = '<p style = "font-size: 30px;">Félicitations, <span style = "font-weight: 800; color: red; font-size: 30px">Joueur n°2</span>, vous avez gagné!! <i class="fas fa-glass-cheers"></i><p/><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>');
         buttonRollDice.classList.replace( "active", "disabled");
         buttonHold.classList.replace( "active", "disabled");
         startPlayerOne.classList.remove("startPlayerButton");
         startPlayerTwo.classList.remove("startPlayerButton");
         textPlayerOne.classList.remove("startPlayerButton");
         textPlayerTwo.classList.remove("startPlayerButton");
         gamePlaying = false;
     } else {
         nextPlayer();
     }
   }
})



function nextPlayer() {
   activePlayer === "One" ? activePlayer = "Two" : activePlayer = "One";
   roundScore = 0;

   document.getElementById("diceScorePlayerOne").innerHTML = "0";
   document.getElementById("diceScorePlayerTwo").innerHTML = "0";
   startPlayerOne.classList.toggle("startPlayerButton");
   startPlayerTwo.classList.toggle("startPlayerButton");
   textPlayerOne.classList.toggle("startPlayerButton");
   textPlayerTwo.classList.toggle("startPlayerButton");
}


