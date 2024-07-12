// get random choice from : rock || paper || scissors
function getComputerChoice() {
  // get random number
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  // setting choice based on "randomNumber"
  const choice =
    randomNumber === 1 ? "rock" : randomNumber === 2 ? "paper" : "scissors";
  return choice;
}

console.log(getComputerChoice());

// get user input
function getHumanChoice() {
  // get user input and convert to lowercase
  const choice = prompt(
    "Please enter your choice of 'rock', 'paper', or 'scissors': "
  ).toLowerCase();

  return choice;
}

console.log(getHumanChoice());
