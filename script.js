let playerScore = 0;
let computerScore = 0;

const gameContainer = document.querySelector(".game-container");
const buttons = document.querySelectorAll(".btn");
const currentScore = document.querySelector(".current-score");
const currentRound = document.querySelector(".current-round");

gameContainer.addEventListener("click", game);

function computerPlay() {
  const signs = ["rock", "paper", "scissors"];
  const selectedSign = signs[Math.floor(Math.random() * signs.length)];
  return selectedSign;
}

function singleRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection)
    return `It's a draw. You both chose ${computerSelection}`;

  switch (playerSelection) {
    case "rock":
      return computerSelection === "paper"
        ? "You lose! Paper beats Rock"
        : "You win! Rock beats Scissors";
      break;

    case "paper":
      return computerSelection === "rock"
        ? "You win! Paper beats Rock"
        : "You lose! Scissors beat Paper";
      break;

    case "scissors":
      return computerSelection === "rock"
        ? "You lose! Rock beats Scissors"
        : "You win! Scissors beat Paper";
      break;
  }
}

function game(e) {
  if (!e.target.classList.contains("btn")) return;

  let playerSelection = e.target.value;
  let computerSelection = computerPlay();
  let result = singleRound(playerSelection, computerSelection);
  currentRound.innerText = result;

  if (result.startsWith("You win!")) {
    playerScore++;
  } else if (result.startsWith("You lose")) {
    computerScore++;
  }

  currentScore.innerText = `The current score is: ${playerScore} | ${computerScore}`;

  if (isWinnerDetermined()) {
    currentScore.innerText = theWinnerIs();
    startNewGame();
  } else return;
}

function isWinnerDetermined() {
  return playerScore === 3 || computerScore === 3 ? true : false;
}

function theWinnerIs() {
  return playerScore === 3
    ? `You win. Score is ${playerScore}:${computerScore}`
    : `You lose. Score is ${playerScore}:${computerScore}`;
}

function startNewGame() {
  playerScore = 0;
  computerScore = 0;
  currentRound.innerText = "New round. Click a button";
  // currentScore.innerText = "The current score is: 0 | 0";
}
