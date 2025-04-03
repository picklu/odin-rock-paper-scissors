console.log("Welcome to the Rock Paper Scissors game!");
// Define the choices
const choices = ["rock", "paper", "scissors"];
// Initialize the score
// Prompt the user for their choice
function getHumanChoice() {
    let userInput = prompt("Enter rock, paper, or scissors:")
        .toLowerCase();
    while (!choices.includes(userInput)) {
        userInput = prompt(
            "Invalid choice. Please enter rock, paper, or scissors:"
        ).toLowerCase();
    }
    return userInput;
}
// Initialize the score

// Get the random choice of the computer
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
// Compare the choices and determine the winner
// Display the result
// Ask the user if they want to play again
// If the user chooses to play again, restart the game
// If the user chooses not to play again, end the game
// Display the final score
// Thank the user for playing
// End the game
