function computerPlay() {
  const signs = ["rock", "paper", "scissors"];
  const selectedSign = signs[Math.floor(Math.random() * signs.length)];
  return selectedSign;
}

function singleRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection)
    return `It's a draw. You both chose ${computerSelection}`;

  switch (playerSelection) {
    case "rock":
      alert(
        computerSelection === "paper"
          ? "You lose! Paper beats Rock"
          : "You win! Rock beats Scissors"
      );
      return computerSelection === "paper"
        ? "You lose! Paper beats Rock"
        : "You win! Rock beats Scissors";
      break;

    case "paper":
      alert(
        computerSelection === "rock"
          ? "You win! Paper beats Rock"
          : "You lose! Scissors beat Paper"
      );
      return computerSelection === "rock"
        ? "You win! Paper beats Rock"
        : "You lose! Scissors beat Paper";
      break;

    case "scissors":
      alert(
        computerSelection === "rock"
          ? "You lose! Rock beats Scissors"
          : "You win! Scissors beat Paper"
      );
      rock;
      return computerSelection === "rock"
        ? "You lose! Rock beats Scissors"
        : "You win! Scissors beat Paper";
      break;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Chose rock, paper or scissors");
    let computerSelection = computerPlay();
    let result = singleRound(playerSelection, computerSelection);
    result.startsWith("You win!") ? playerScore++ : computerScore++;
  }

  alert(
    playerScore > computerScore
      ? `You win. Score is ${playerScore}:${computerScore}`
      : `You lose. Score is ${playerScore}:${computerScore}`
  );
}

game();
