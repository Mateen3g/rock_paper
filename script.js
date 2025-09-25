
// **Algorithm**
/*
    Create variables for the 3 options; rock, paper, scissors
    Create a function to make computer randomly select one option
    create a function to prompt human to enter their selection
    Create a function to use else-if to pair and select one winner
    Create a function to use loop-while the session < 5 sessions
    Display both computer and human selection and their scores
*/


// Options to select from
const rock = "rock";
const paper = "paper";
const scissors = "scissors";

// Variable to hold human choice
const humanChoice = function humanchoice() {
    let choice = prompt("Enter Choice: Rock, Paper or scissors");
    return choice.toLowerCase()
}

// Variable to hold computer choice
const computerChoice = function computerchoice() {

    // Using a random number from 1-3 to rep the 3 options
    let choice = Math.floor(Math.random() * 3) + 1;

    // Assigning each number to an option
    if (choice === 1) {
        computer = "rock";
    } else if (choice === 2) {
        computer = "paper";
    } else {
        computer = "scissors"
    }

    // Returning and displaying the selected option in DOM 
    console.log(`${computer} is COMPUTER SELECTION`)
    return computer;
}

// The initial score of both players
let computerScore = 0;
let humanScore = 0;


// Function to play a round
function playRound(pc, user) {
    let win;
    let score = `Human-Score=${humanScore} |---| Computer-Score=${computerScore}`;

    // Paring options and selecting a winning option
    if (pc === user) {
        win = "This is a tie"
    } else if (pc === rock && user === paper) {
        win = paper;
        if (win === pc) {
            computerScore += 1;
        } else {
            humanScore += 1;
        };
    } else if (pc === rock && user === scissors) {
        win = rock;
        if (win === pc) {
            computerScore += 1;
        } else {
            humanScore += 1;
        };
    } else if (pc === paper && user === rock) {
        win = paper;
        if (win === pc) {
            computerScore += 1;
        } else {
            humanScore += 1;
        };
    } else if (pc === paper && user === scissors) {
        win = scissors;
        if (win === pc) {
            computerScore += 1;
        } else {
            humanScore += 1;
        };
    } else if (pc === scissors && user === rock) {
        win = rock;
        if (win === pc) {
            computerScore += 1;
        } else {
            humanScore += 1;
        };
    } else if (pc === scissors && user === paper) {
        win = scissors;
        if (win === pc) {
            computerScore += 1;
        } else {
            humanScore += 1;
        };
    }
    console.log(`Computer selected, ${pc}`);
    console.log(`User selected, ${user}`);
    console.log(`${win} wins this round`);
    console.log(score);
    return win;
}



function playGame() {
    let session = 0;
    while (session < 5) {
        playRound(computerChoice(), humanChoice());
        session++;
    }
}

playGame();
