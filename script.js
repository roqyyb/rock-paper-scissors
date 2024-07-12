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
