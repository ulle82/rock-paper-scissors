let humanScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let computerSelection = Math.floor(Math.random() * 3);
    return choices[computerSelection];
}

function getHumanChoice() {
    let playerSelection = prompt("Please enter: Rock, Paper or Scissors");
    playerSelection = playerSelection.toLowerCase();
    return playerSelection;
}

function playRound(humanChoice, computerChoice) {
    console.log(`The computer chose ${computerChoice} and you chose ${humanChoice}`);
    if (humanChoice == "rock" && computerChoice == "rock") {
        console.log(`It's a draw!`);
    } else if (humanChoice == "scissors" && computerChoice == "scissors") {
        console.log(`It's a draw!`);
    } else if (humanChoice == "paper" && computerChoice == "paper") {
        console.log(`It's a draw!`);
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log(`You win, ${humanChoice} beats ${computerChoice}!`);
        ++humanScore;
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log(`You lose, ${humanChoice} is beaten by ${computerChoice}!`);
        ++computerScore;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log(`You win, ${humanChoice} beats ${computerChoice}!`);
        ++humanScore;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log(`You lose, ${humanChoice} is beaten by ${computerChoice}!`);
        ++computerScore;
    }  else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log(`You win, ${humanChoice} beats ${computerChoice}!`);
        ++humanScore;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log(`You lose, ${humanChoice} is beaten by ${computerChoice}!`);
        ++computerScore;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    
    if (humanScore > computerScore) {
        console.log(`Congratulation, you win! Your score is ${humanScore} and the computers is ${computerScore}.`);
    } else if (computerScore > humanScore) {
        console.log(`You lose! Your score is ${humanScore} and the computers is ${computerScore}. Better luck next time!`);
    } else {
        console.log(`Its a draw! You both scored ${humanScore} points`);
    }
}

playGame()

