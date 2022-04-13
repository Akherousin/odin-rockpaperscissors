function computerPlay() {
  const signs = ["rock", "paper", "scissors"];
  const selectedSign = signs[Math.floor(Math.random() * signs.length)];
  return selectedSign;
}

let playerSelection = "scissors";
let computerSelection = computerPlay();

function singleRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

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

console.log(singleRound(playerSelection, computerSelection));
