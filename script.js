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

// Display the instructions
console.log("Instructions:");
console.log("1. You will play against the computer.");
console.log("2. Choose rock, paper, or scissors.");
console.log("3. The computer will randomly choose one of the three options.");
console.log("4. The winner is determined based on the rules of the game.");
console.log("5. The game consists of five rounds.");
console.log("6. The player with the most wins at the end of five rounds is the overall winner.");
console.log("7. Type `playGame()` and hit <Enter> to start the game!");

// Function to start the game
function playGame() {
    // Call the function to play five rounds
    playFiveRounds();
    // Game over message
    console.log("\tGame Over!");
    // Display the final score
    let score = [
        { "Player": "Human", Score: humanScore },
        { "Player": "Computer", Score: computerScore }
    ];
    // Determine the overall winner
    if (humanScore > computerScore) {
        console.log("\tCongratulations! You are the overall winner!");
    }
    else if (humanScore < computerScore) {
        console.log("\tComputer is the overall winner!");
    }
    else {
        console.log("\tIt's a draw!");
    }
    // Display the final score
    console.log("\tFinal Score:");
    console.table(score);
    // Thank the user for playing
    console.log("Thank you for playing!");
}