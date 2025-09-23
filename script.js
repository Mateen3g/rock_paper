// Options to select from
const rock = "rock";
const paper = "paper";
const scissors = "scissors";


const humanChoice = function humanchoice() {
    return prompt("Enter Choice: Rock, Paper or scissors");
}

const computerChoice = function computerchoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
        computer = "rock";
    } else if (choice === 2) {
        computer = "paper";
    } else {
        computer = "scissors"
    }
    console.log(`${computer} is COMPUTER SELECTION`)
    return computer;
}

function playRound(pc, user) {
    let win;
    if (pc === rock && user === paper) {
        win = paper;
    } else if (pc === rock && user === scissors) {
        win = rock
    } else if (pc === paper && user === rock) {
        win = paper;
    } else if (pc === paper && user === scissors) {
        win = scissors
    } else if (pc === scissors && user === rock) {
        win = rock
    } else if (pc === scissors && user === paper) {
        win = scissors
    } else {
        win = "This is a draw round go again"
    }

    console.log(`Computer selected, ${pc}`);
    console.log(`User selected, ${user}`);
    console.log(`${win}, is the winning option`);
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