// declare constants
const ROCK = "rock",
  PAPER = "paper",
  SCISSORS = "scissors";

// declare players score variables
let humanScore = 0,
  computerScore = 0;

// get random choice from : rock || paper || scissors
function getComputerChoice() {
  // get random number
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  // setting choice based on "randomNumber"
  const choice =
    randomNumber === 1 ? ROCK : randomNumber === 2 ? PAPER : SCISSORS;
  return choice;
}

// get user input
function getHumanChoice() {
  // get user input and convert to lowercase
  const choice = prompt(
    "Please enter your choice of 'rock', 'paper', or 'scissors': "
  ).toLowerCase();

  return choice;
}

// playRound: determines the round winner based on the inputs "humanChoice" and "computerChoice"
function playRound(humanChoice, computerChoice) {
  // rock crushes scissors
  if (
    (humanChoice === ROCK && computerChoice === SCISSORS) ||
    (humanChoice === SCISSORS && computerChoice === ROCK)
  ) {
    // increment winner's score
    humanChoice === ROCK ? (humanScore += 1) : (computerScore += 1);
  }
  // paper wraps rock
  else if (
    (humanChoice === ROCK && computerChoice === PAPER) ||
    (humanChoice === PAPER && computerChoice === ROCK)
  ) {
    // increment winner's score
    humanChoice === PAPER ? (humanScore += 1) : (computerScore += 1);
  }
  // Scissors cuts paper
  else if (
    (humanChoice === PAPER && computerChoice === SCISSORS) ||
    (humanChoice === SCISSORS && computerChoice === PAPER)
  ) {
    // increment winner's score
    humanChoice === SCISSORS ? (humanScore += 1) : (computerScore += 1);
  } else {
    return console.log("Draw!!!");
  }

  if (humanScore > computerScore) {
    return console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
  } else {
    return console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
  }
}

// players selections
const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

// call playRound with players selections
playRound(humanSelection, computerSelection);
