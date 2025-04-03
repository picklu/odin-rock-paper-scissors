console.log("Welcome to the Rock Paper Scissors game!");
// Initialize the score
// Prompt the user for their choice
// Get the random choice of the computer
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
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
