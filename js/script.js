$(".play").click(function () {
  //assigns input value to variable userInput and displays it in div
  let userInput = $(".input").val().toLowerCase();
  $(".userChoice").text(userInput);

  //assigns a random number from 1-3 and a value of rock/paper/scissors based on number
  let computerChoice = "";
  let randomNumber = Math.ceil(Math.random() * 3);
  
  if (randomNumber === 1) {
    computerChoice = "scissors";
  } else if (randomNumber === 2) {
    computerChoice = "rock";
  } else if (randomNumber === 3) {
    computerChoice = "paper";
  }

  $(".computerChoice").text(computerChoice);
  
  

  //determines winner by comparing userInput and computerChoice
  function chooseWinner() {
    if (
      (userInput === "scissors" && computerChoice === "rock") ||
      (userInput === "rock" && computerChoice === "paper") ||
      (userInput === "paper" && computerChoice === "scissors")
    ) {
      return "Computer wins";
    } else if (
      (userInput === "rock" && computerChoice === "scissors") ||
      (userInput === "paper" && computerChoice === "rock") ||
      (userInput === "scissors" && computerChoice === "paper")
    ) {
      return "User wins";
    } else if (userInput === computerChoice) {
      return "It's a tie!";
    } else {
      $(".result").text("Please enter rock, paper, or scissors.");
      $(".userChoice").text("");
      $(".computerChoice").text("");
    }
  }
  

  //displays result message and resets the input field
  $(".result").text(chooseWinner());
  $(".input").val("");
});
