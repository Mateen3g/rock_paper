// Options to select from
const rock = "rock";
const paper = "paper";
const scissors = "scissors";

let computerChoice;
const userChoice = prompt("Enter Choice: Rock, Paper or scissors");

function computerSELECTION () {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1){
        computerChoice = "rock";
    } else if (choice === 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors"
    }
    console.log(`${computerChoice} is COMPUTER SELECTION`)
    return computerChoice;
}

function gameRound(pc, user) {
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

computerSELECTION();
gameRound(computerChoice, userChoice)