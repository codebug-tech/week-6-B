document.addEventListener('DOMContentLoaded', function() {

  // The code below allows the computer to pick a random choice between: rock, paper, or scissors.
  var options = ["rock", "paper", "scissors"];
  var cathComputerChoice = options[Math.floor(Math.random() * options.length)];
  // Your prompt() goes below
var cathChoice = prompt ("Choose between rock, paper, and scissors");





  // console.log("The computer chooses: " + computerChoice);
  // Your declareWinner function goes below
function declareWinner (userChoice,computerChoice) {
  if ((userChoice == "scissors" && computerChoice == "rock") || (userChoice == "rock" && computerChoice == "paper") || (userChoice == "paper" && computerChoice == "scissors")) {
    return "The Computer has won!";
  } else if ((userChoice == "rock" && computerChoice == "paper") || (userChoice == "scissors" && computerChoice == "paper") || (userChoice ==  "paper" && computerChoice == "rock")) {
    return "You have won!";
  } else {
    return "We got to the else";
  }
}
console.log(declareWinner(cathChoice,cathComputerChoice));
})