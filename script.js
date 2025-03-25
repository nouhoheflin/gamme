// Variables
let secretNumber, score, highscore;

// Sélection des éléments
const againButton = document.querySelector('.again');
const checkButton = document.querySelector('.check');
const inputGuess = document.querySelector('.guess');
const messageElement = document.querySelector('.message');
const scoreElement = document.querySelector('.score');
const highscoreElement = document.querySelector('.highscore');
const numberElement = document.querySelector('.number');
const body = document.querySelector('body');

// Fonction pour réinitialiser le jeu
function resetGame() {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
  scoreElement.textContent = score;
  messageElement.textContent = 'Start guessing...';
  numberElement.textContent = '?';
  body.style.backgroundColor = '#222';
  inputGuess.value = '';
}

// Fonction pour vérifier la réponse
function checkGuess() {
  const guess = Number(inputGuess.value);

  if (!guess || guess < 1 || guess > 20) {
    messageElement.textContent = 'Please enter a number between 1 and 20!';
    return;
  }

  if (guess == secretNumber) {
    messageElement.textContent = 'Correct Number!';
    body.style.backgroundColor = 'green';
    numberElement.textContent = secretNumber;
    updateHighscore();
  } else {
    messageElement.textContent = guess < secretNumber ? 'Too low!' : 'Too high!';
    score--;
    scoreElement.textContent = score;
    if (score <= 0) gameOver();
  }
}

// Mettre à jour le highscore
function updateHighscore() {
  if (score > highscore) {
    highscore = score;
    highscoreElement.textContent = highscore;
  }
}

function metreAjour(newScore){
  score=newScore;
  document.querySelector(`.score`).textContent= score;
}
// Fonction de fin de jeu
function gameOver() {
  messageElement.textContent = 'Game over!';
  body.style.backgroundColor = 'red';
  numberElement.textContent = secretNumber;
}

// Événements
againButton.addEventListener('click', resetGame);
checkButton.addEventListener('click', checkGuess);

// Initialisation du jeu
resetGame();
 
