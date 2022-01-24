let buttonStart = document.getElementById("buttonStart");
let startPlayerOne = document.getElementById("startPlayerOne");
let startPlayerTwo = document.getElementById("startPlayerTwo");
let textPlayerOne = document.getElementById("textPlayerOne");
let textPlayerTwo = document.getElementById("textPlayerTwo");
let buttonRollDice = document.getElementById("buttonRollDice");
let buttonHold = document.getElementById("buttonHold");
let diceSpace = document.getElementById("diceSpace");
let diceScore = document.getElementById("diceScore");
let diceScorePlayerOne = document.getElementById("diceScorePlayerOne");
let diceScorePlayerTwo = document.getElementById("diceScorePlayerTwo");
let walletPlayerOne = document.getElementById("walletPlayerOne");
let walletPlayerTwo = document.getElementById("walletPlayerTwo");
let alertMessage = document.getElementById("alertMessage");


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


let playerActive, roundScore, gamePlaying, walletOne, walletTwo;

//Evénement DOM se déclenchant au clic sur le Bouton "Nouvelle partie"
buttonStart.addEventListener("click", ()=>{
   
   gamePlaying = true;
   activePlayer = "One";
   roundScore = 0;
   walletOne = 0;
   walletTwo = 0;
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
   alertMessage.style.display = "none";
})


//Evénement DOM se déclenchant au clic sur le Bouton "Lancer le dé"
buttonRollDice.addEventListener("click", ()=>{

   let randomNumber = Math.floor(Math.random()*dice.length);  /**Tirage d'un nombre au hasard entre 0 et 5 */
   diceSpace.innerHTML = dice[randomNumber]["picture"] + '<p id="diceScore">Résultat: ' + (randomNumber+1) + '</p>';

   if(gamePlaying){ /** Si le jeu a commmencé */

      if( (randomNumber+1) !== 1){ /** Si le résultat du lancé du dé est différent de 1 */
         roundScore += (randomNumber + 1);
         console.log("roundScore += randomNumber: ", roundScore);
         document.getElementById("diceScorePlayer" + activePlayer).innerHTML = roundScore;
      } else { /** sinon c'est à l'autre joueur */
         nextPlayer()
      }
   }
})


//Evénement DOM se déclenchant au clic sur le Bouton "Sécuriser votre gain"
buttonHold.addEventListener("click", ()=>{
   if(gamePlaying){
      activePlayer === "One" ? (walletOne += roundScore) : (walletTwo += roundScore);
      activePlayer === "One" ? (walletPlayerOne.innerHTML = walletOne) : (walletPlayerTwo.innerHTML = walletTwo);
 
      if (walletOne >= 10 || walletTwo >= 10) {
         console.log("wallet", walletOne)
         alertMessage.style.display = "block";
         activePlayer === "One" ?(alertMessage.innerHTML = '<p style = "font-size: 30px;">Félicitations, <span style = "font-weight: 800; color: red; font-size: 30px">Joueur n°1</span>, vous avez gagné!! <i class="fas fa-glass-cheers"></i><p/> <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>') : 
         (alertMessage.innerHTML = '<p style = "font-size: 30px;">Félicitations, <span style = "font-weight: 800; color: red; font-size: 30px">Joueur n°2</span>, vous avez gagné!! <i class="fas fa-glass-cheers"></i><p/><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>');
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


// Fonction pour permettre à l'autre joueur de jouer 
function nextPlayer() {
   activePlayer === "One" ? activePlayer = "Two" : activePlayer = "One";
   roundScore = 0;

   diceScorePlayerOne.innerHTML = "0";
   diceScorePlayerTwo.innerHTML = "0";
   startPlayerOne.classList.toggle("startPlayerButton");
   startPlayerTwo.classList.toggle("startPlayerButton");
   textPlayerOne.classList.toggle("startPlayerButton");
   textPlayerTwo.classList.toggle("startPlayerButton");
}


