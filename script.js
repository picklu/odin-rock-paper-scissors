console.log("Welcome to the Rock Paper Scissors game!");
// Define the choices
const choices = ["rock", "paper", "scissors"];
// Prompt the user for their choice
function getHumanChoice() {
    let userInput = prompt("Enter rock, paper, or scissors:")
        .toLowerCase();
    // Validate the user input
    // If the input is not valid, prompt the user again
    // will be updated using a while loop
    return userInput;
}
// Initialize the score
let humanScore = 0;
let computerScore = 0;
// Get the random choice of the computer
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log("You win this round!");
    } else {
        computerScore++;
        console.log("Computer wins this round!");
    }
}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();
console.log(`You chose: ${humanChoice}`);
console.log(`Computer chose: ${computerChoice}`);
playRound(humanChoice, computerChoice);
// Display the current score
let score = [
    { "Player": "Human", Score: humanScore },
    { "Player": "Computer", Score: computerScore }
];
console.table(score);
// Compare the choices and determine the winner
// Main game loop
// Compare the choices and determine the winner
// Display the result
// Ask the user if they want to play again
// If the user chooses to play again, restart the game
// If the user chooses not to play again, end the game
// Display the final score
// Thank the user for playing
// End the game
