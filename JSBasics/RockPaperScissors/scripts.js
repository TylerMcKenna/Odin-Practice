// Take in an integer max value
// Return a random number from 0 up to that max - 1
// Range is (0, max - 1)
function getRandomInt(exclusiveMax) {
    return Math.floor(Math.random() * exclusiveMax);
}

// Get a random value from zero (inclusive) to one (exclusive)
// Convert that random value to 1, 2, or 3
// IF the random value is 1, return "rock"
// IF the random value is 2, return "paper"
// If the random value is 3, return "scissors"
function getComputerChoice() {
    let move = getRandomInt(3)
    switch (move) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return "A value out of range has been encountered in getComputerChoice()"
    }
}

// Prompt the user for input of a value "rock", "paper", or "scissors"
// IF the input is not valid, prompt again
// Return the user's input
function getHumanChoice() {
    let isInputValid = false;
    let promptResult = prompt("Give a move! Enter rock, paper, or scissors!").toLowerCase();
    while (!isInputValid) {
        if (promptResult === "rock"     ||
            promptResult === "paper"    ||
            promptResult === "scissors"
        ) { 
            isInputValid = true
        } 
        else {
            promptResult = prompt("Please make sure your input is either rock, paper, or scissors!").toLowerCase();
        } 
    }
    return promptResult;
}

// Runs the entire game
function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    // Take in a user choice and a human choice
    // Compare the two values to decide who wins in rock paper scissors
    // Output a text message saying who won or lost such as "You lose! Paper beats Rock"
    // Increment humanScore or computerScore 1 based on who won the round
    function playRound(humanChoice, computerChoice) {
        // Checks all the human win conditions and shows a human win, same for computer, checks ties as well
        if (humanChoice === computerChoice) {
            console.log(`It was a tie! You both chose ${humanChoice}!`)
        }
        else if (humanChoice === "rock" && computerChoice === "scissors"  ||
            humanChoice === "paper" && computerChoice === "rock"     ||
            humanChoice === "scissors" && computerChoice === "paper"
        ) {
            humanScore++;
            console.log(`You win- ${humanChoice} beats ${computerChoice}!`);
        } 
        else if 
        (computerChoice === "rock" && humanChoice === "scissors"  ||
            computerChoice === "paper" && humanChoice === "rock"     ||
            computerChoice === "scissors" && humanChoice === "paper"
        ) {
            computerScore++;
            console.log(`You lose- ${computerChoice} beats ${humanChoice}!`);
        }
    }

    // Runs 5 games
    for (let i = 0; i <= 4; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice)
    }

    // Tells the user who won or lost
    if (humanScore === computerScore) {
        console.log(`You tied! You both had a score of ${humanScore}.`)
    }
    else if (humanScore > computerScore) {
        console.log(`You won! You had a score of ${humanScore} while the computer had a score of ${computerScore}.`)
    } else {
        console.log(`You lost. The computer had a score of ${computerScore} while you had a score of ${humanScore}.`)
    }
}