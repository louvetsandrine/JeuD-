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

// Tableau avec la liste des images des différentes faces du dé et de leur score
const dice = [
  {
    picture: '<img class="img-fluid" src="images/dice-1.png" id="diceOne" alt="Dé n°1"/>',
    score: 1,
  },
  {
    picture: '<img class="img-fluid" src="images/dice-2.png" id="diceTwo" alt="Dé n°2"/>',
    score: 2,
  },
  {
    picture: '<img class="img-fluid" src="images/dice-3.png" 0" id="diceThree" alt="Dé n°3"/>',
    score: 3,
  },
  {
    picture: '<img class="img-fluid" src="images/dice-4.png" id="diceFour" alt="Dé n°4"/>',
    score: 4,
  },
  {
    picture: '<img class="img-fluid" src="images/dice-5.png" id="diceFive" alt="Dé n°5"/>',
    score: 5,
  },
  {
    picture: '<img class="img-fluid" src="images/dice-6.png" id="diceSix" alt="Dé n°6"/>',
    score: 6,
  },
];

let playerActive, roundScore, gamePlaying, walletOne, walletTwo;

// Evénement DOM se déclenchant au clic sur le Bouton 'Nouvelle partie'
buttonStart.addEventListener("click", () => {
  // Démarrage du jeu en commançant par le joueur n°1 avec mis à 0 des scores temporaires et des gains
  // et activations des boutons 'Lancé le dé' et 'Sécuriser votre gain'
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
  buttonRollDice.classList.replace("disabled", "active");
  buttonHold.classList.replace("disabled", "active");
  startPlayerOne.classList.add("startPlayerButton");
  startPlayerTwo.classList.remove("startPlayerButton");
  textPlayerOne.classList.add("startPlayerButton");
  textPlayerTwo.classList.remove("startPlayerButton");
  alertMessage.style.display = "none";
});

// Evénement DOM se déclenchant au clic sur le Bouton 'Lancer le dé'
buttonRollDice.addEventListener("click", () => {
  // Tirage d'un nombre au hasard entre 0 et 5 et affichage du résultat sous le dé
  let randomNumber = Math.floor(Math.random() * dice.length);
  diceSpace.innerHTML = dice[randomNumber]["picture"] + '<p id="diceScore">Résultat: ' + (randomNumber + 1) + "</p>";
  // Si le jeu commence
  if (gamePlaying) {
    // Si le résultat du lancé du dé est différent de 1
    if (randomNumber + 1 !== 1) {
      roundScore += randomNumber + 1;
      //Affichage du score temporaire sous le joueur actif
      document.getElementById("diceScorePlayer" + activePlayer).innerHTML = roundScore;
    } else {
      // Joueur suivant
      nextPlayer();
    }
  }
});

// Evénement DOM se déclenchant au clic sur le Bouton 'Sécuriser votre gain'
buttonHold.addEventListener("click", () => {
  // Si le jeu commence
  if (gamePlaying) {
    // Addition du score temporaire au gain du joueur actif
    activePlayer === "One" ? (walletOne += roundScore) : (walletTwo += roundScore);
    activePlayer === "One" ? (walletPlayerOne.innerHTML = walletOne) : (walletPlayerTwo.innerHTML = walletTwo);

    // Si le gain est >=100
    if (walletOne >= 100 || walletTwo >= 100) {
      // Message félicitant le joueur gagnant
      alertMessage.style.display = "block";
      activePlayer === "One"
        ? (alertMessage.innerHTML =
            '<p style = "font-size: 30px;">Félicitations, <span style = "font-weight: 800; color: red; font-size: 30px">Joueur n°1</span>, vous avez gagné!! <i class="fas fa-glass-cheers"></i><p/></button>')
        : (alertMessage.innerHTML =
            '<p style = "font-size: 30px;">Félicitations, <span style = "font-weight: 800; color: red; font-size: 30px">Joueur n°2</span>, vous avez gagné!! <i class="fas fa-glass-cheers"></i><p/></button>');
      // Desactivation des boutons "Lancer le dé" et "Sécuriser votre gain", texte et rond remis en noir et fin de la partie
      buttonRollDice.classList.replace("active", "disabled");
      buttonHold.classList.replace("active", "disabled");
      startPlayerOne.classList.remove("startPlayerButton");
      startPlayerTwo.classList.remove("startPlayerButton");
      textPlayerOne.classList.remove("startPlayerButton");
      textPlayerTwo.classList.remove("startPlayerButton");
      gamePlaying = false;
    } else {
      // Joueur suivant
      nextPlayer();
    }
  }
});

// Fonction pour permettre au joueur suivant de jouer
const nextPlayer = () => {
  activePlayer === "One" ? (activePlayer = "Two") : (activePlayer = "One");
  roundScore = 0;

  diceScorePlayerOne.innerHTML = "0";
  diceScorePlayerTwo.innerHTML = "0";
  startPlayerOne.classList.toggle("startPlayerButton");
  startPlayerTwo.classList.toggle("startPlayerButton");
  textPlayerOne.classList.toggle("startPlayerButton");
  textPlayerTwo.classList.toggle("startPlayerButton");
};
