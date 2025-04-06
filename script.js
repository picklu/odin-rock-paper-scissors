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

// Compare the choices and determine the winner
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("\tIt's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log("\tYou win this round!");
    } else {
        computerScore++;
        console.log("\tComputer wins this round!");
    }
}

// Main game loop
// Function to play five rounds of the game
function playFiveRounds() {
    for (let round = 0; round < 5; round++) {
        console.log(`\n==> Round ${round + 1}`);
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        console.log(`\tYou chose: ${humanChoice}`);
        console.log(`\tComputer chose: ${computerChoice}`);
        playRound(humanChoice, computerChoice);
        console.log("\tCurrent Score:");
        console.log(`\t\tHuman ${humanScore} <=> Computer ${computerScore}`);
    }
}

// Call the function to play five rounds
playFiveRounds();
// Game over message
console.log("Game Over!");
// Display the final score
let score = [
    { "Player": "Human", Score: humanScore },
    { "Player": "Computer", Score: computerScore }
];
// Determine the overall winner
if (humanScore > computerScore) {
    console.log("Congratulations! You are the overall winner!");
}
else if (humanScore < computerScore) {
    console.log("Computer is the overall winner!");
}
else {
    console.log("It's a draw!");
}
// Display the final score
console.log("\nFinal Score:");
console.table(score);
// Thank the user for playing
console.log("Thank you for playing!");
// Display the final score  
// End the game