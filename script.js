let gameActive = true;

// declare constants
const ROCK = "rock",
  PAPER = "paper",
  SCISSORS = "scissors";

// declare players score variables
let humanScore = 0,
  robotScore = 0;

let humanScoreElem = document.querySelector("#human-score");
let robotScoreElem = document.querySelector("#robot-score");

let messageElem = document.querySelector("#message");

function updateUI() {
  humanScoreElem.textContent = humanScore;
  robotScoreElem.textContent = robotScore;

  if (humanScore > robotScore) {
    robotScoreElem.style.color = "red";
    humanScoreElem.style.color = "green";
  } else if (humanScore < robotScore) {
    robotScoreElem.style.color = "green";
    humanScoreElem.style.color = "red";
  } else {
    humanScoreElem.style.color = "black";
    robotScoreElem.style.color = "black";
  }
}

function getWinner(humanScore, robotScore) {
  const winner = humanScore === 5 ? "human" : robotScore === 5 ? "robot" : "";
  return winner;
}

// get random choice from : rock || paper || scissors
function getRobotChoice() {
  // get random number
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  // setting choice based on "randomNumber"
  const choice =
    randomNumber === 1 ? ROCK : randomNumber === 2 ? PAPER : SCISSORS;

  console.log("robot choice", choice);
  return choice;
}

const gameButtons = document.querySelector(".buttons");

gameButtons.addEventListener("click", (e) => {
  const target = e.target;

  if (!gameActive) return;

  let humanChoice = "";

  switch (target.id) {
    case ROCK:
      humanChoice = ROCK;
      break;

    case PAPER:
      humanChoice = PAPER;
      break;

    case SCISSORS:
      humanChoice = SCISSORS;
      break;
  }
  const robotChoice = getRobotChoice();
  playRound(humanChoice, robotChoice);
});

function playRound(humanChoice, robotChoice) {
  // players round score
  let humanRoundScore = 0,
    robotRoundScore = 0;

  // return if humanChoice returns "undefined"
  if (!humanChoice) return;

  // rock crushes scissors
  if (
    (humanChoice === ROCK && robotChoice === SCISSORS) ||
    (humanChoice === SCISSORS && robotChoice === ROCK)
  ) {
    // increment winner's score
    humanChoice === ROCK ? (humanRoundScore += 1) : (robotRoundScore += 1);
  }
  // paper wraps rock
  else if (
    (humanChoice === ROCK && robotChoice === PAPER) ||
    (humanChoice === PAPER && robotChoice === ROCK)
  ) {
    // increment winner's score
    humanChoice === PAPER ? (humanRoundScore += 1) : (robotRoundScore += 1);
  }
  // Scissors cuts paper
  else if (
    (humanChoice === PAPER && robotChoice === SCISSORS) ||
    (humanChoice === SCISSORS && robotChoice === PAPER)
  ) {
    // increment winner's score
    humanChoice === SCISSORS ? (humanRoundScore += 1) : (robotRoundScore += 1);
  } else {
    messageElem.textContent = "Draw!!!";
  }

  if (humanRoundScore > robotRoundScore) {
    // inc human global/game score
    humanScore += 1;

    messageElem.textContent = `You win! ${humanChoice} beats ${robotChoice}.`;
  } else {
    // inc robot global/game score
    robotScore += 1;

    messageElem.textContent = `You lose! ${robotChoice} beats ${humanChoice}.`;
  }

  updateUI();
  const winner = getWinner(humanScore, robotScore);

  if (winner) {
    if (winner === "human") {
      messageElem.textContent = "Hooray! You won!!!";
      messageElem.style.color = "green";
    } else {
      messageElem.textContent = "Oop! You lose. Try again.";
      messageElem.style.color = "red";
    }
    // remove game buttons
    while (gameButtons.firstChild) {
      gameButtons.removeChild(gameButtons.firstChild);
    }
    // add new game button
    const newGameBtn = document.createElement("button");
    newGameBtn.textContent = "new game";
    gameButtons.appendChild(newGameBtn);
    newGameBtn.addEventListener("click", () => reset());
    // stop game
    gameActive = false;
  }
}

function reset() {
  // humanScore = 0;
  // robotScore = 0;
  // winner = "";
  // gameActive = false;
  location.reload();
}
