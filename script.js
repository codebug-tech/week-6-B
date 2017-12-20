document.addEventListener('DOMContentLoaded', function() {

  // The code below allows the computer to pick a random choice between: rock, paper, or scissors.
  var options = ["rock", "paper", "scissors"];
  var computerChoice = options[Math.floor(Math.random() * options.length)];
  // Your prompt() goes below
  var userChoice = prompt("rock, paper, scissors?");

  console.log("The user chooses: " + userChoice);
  console.log("The computer chooses: " + computerChoice);
  // Your declareWinner function goes below
  function declareWinner(userChoice, computerChoice) {
    if ((userChoice == "paper" && computerChoice == "scissors") || (userChoice == "scissors" && computerChoice == "rock") || (userChoice == "rock" && computerChoice == "paper")) {
      return "The computer won!";
    }
    else if ((userChoice == "scissors" && computerChoice == "paper") || (userChoice == "rock" && computerChoice == "scissors") || (userChoice == "paper" && computerChoice == "rock")) {
      return "You won!";
    }
    else {
      return "It's a tie!";
    };
  };

  console.log(declareWinner(userChoice,computerChoice));




})