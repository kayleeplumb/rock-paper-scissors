
// get random choice in rock paper scissors
function getComputerChoice () {
    num = Math.floor((Math.random() * 3) + 1);
    
    switch(num) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
    
}

// return -1 if lost, 1 if won, 0 if tie
function playRound (playerSelection, computerSelection) {
    p = playerSelection.toLowerCase();
    c = computerSelection;
    
    if (p === c) {
        return 0;
    }
    if (p === "rock" && c === "paper"
    || p === "paper" && c === "scissors"
    || p === "scissors" && c === "rock") {
        return -1;
    } else {
        return 1;
    }
}

//play 5 rounds and keep track of scores
function game() {
    let score = 0;
    
    for(i = 0; i < 5; i++) {
        bet = prompt("Rock, paper, or scissors?")
        currentRound = playRound(bet, getComputerChoice());
        console.log(currentRound)
        score += currentRound;
    }
    return score;
}

console.log("Total: " + game());
