// Elements
const welcomeScreen = document.getElementById(`welcome-screen`);
const gameScreen = document.getElementById('game-screen');
const startGameButton = document.getElementById('start-game-button');
const userName = document.getElementById('username');
const userSelection = document.getElementById('user-selection');
const goButton = document.getElementById('go-button');
const scoreParagraph = document.getElementById('score');
const gameHistoryParagraph = document.getElementById('game-history');

// instantiate the game object from the `RockPaperScissors` class.
let game;

// hide gamescreen
gameScreen.classList.add(`d-none`);

// updateScoreTallyUI
function updateScoreTallyUI(){
  scoreParagraph.innerHTML = userName + ":" + game.score.user + "v CPU" + game.score.cpu;
}

// updateGameHistoryUI
function updateGameHistoryUI(){
  gameHistoryParagraph.innerHTML += `${game.gameHistoryLog[count]} <br/>`;
  gameHistoryParagraph.innerText = game.gameHistorylog;
}

// start-game-button EventListener
startGameButton.addEventListener(`click`, function () {
  const username = username.value;
  game = new RockPaperScissors(userName);
  welcomeScreen.classList.add(`d-none`);
  gameScreen.classList.remove(`d-none`);
  // Complete
});

// go-button EventListener
goButton.addEventListener(`click`, function () {
  let userselection = userSelection.value;
  game.play(userselection);
  count++;
  updateScoreTallyUI();
  updateGameHistoryUI();
  
});