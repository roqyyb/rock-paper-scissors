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
  let choice = prompt(
    "Please enter your choice of 'rock', 'paper', or 'scissors': "
  )?.toLowerCase();

  // cancel game
  if (choice === undefined) return console.log("Game cancelled!");

  // while input is invalid, warn! And prompt user to enter a valid option.
  while (choice !== ROCK && choice !== SCISSORS && choice !== PAPER) {
    // warn
    alert("Please enter a valid option.");
    // get user input again and convert to lowercase
    choice = prompt(
      "Please enter your choice of 'rock', 'paper', or 'scissors': "
    )?.toLowerCase();

    // cancel game
    if (choice === undefined) return console.log("Game cancelled!");
  }

  return choice;
}

// playRound: determines the round winner based on the inputs "humanChoice" and "computerChoice"
function playRound(humanChoice, computerChoice) {
  // players round score
  let humanRoundScore = 0,
    computerRoundScore = 0;

  // return if humanChoice returns "undefined"
  if (!humanChoice) return;

  // rock crushes scissors
  if (
    (humanChoice === ROCK && computerChoice === SCISSORS) ||
    (humanChoice === SCISSORS && computerChoice === ROCK)
  ) {
    // increment winner's score
    humanChoice === ROCK ? (humanRoundScore += 1) : (computerRoundScore += 1);
  }
  // paper wraps rock
  else if (
    (humanChoice === ROCK && computerChoice === PAPER) ||
    (humanChoice === PAPER && computerChoice === ROCK)
  ) {
    // increment winner's score
    humanChoice === PAPER ? (humanRoundScore += 1) : (computerRoundScore += 1);
  }
  // Scissors cuts paper
  else if (
    (humanChoice === PAPER && computerChoice === SCISSORS) ||
    (humanChoice === SCISSORS && computerChoice === PAPER)
  ) {
    // increment winner's score
    humanChoice === SCISSORS
      ? (humanRoundScore += 1)
      : (computerRoundScore += 1);
  } else {
    return console.log("Draw!!!");
  }

  if (humanRoundScore > computerRoundScore) {
    return console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    // inc human global/game score
    humanScore += 1;
  } else {
    return console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    // inc computer global/game score
    computerScore += 1;
  }
}

// players selections
const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

// call playRound with players selections
playRound(humanSelection, computerSelection);

function playGame() {}
