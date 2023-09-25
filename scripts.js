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
    player = playerSelection.toLowerCase();
    computer = computerSelection;
    
    if (player === computer) {
        return 0;
    }
    if (player === "rock" && computer === "paper"
    || player === "paper" && computer === "scissors"
    || player === "scissors" && computer === "rock") {
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
        currentRound = playRound(bet);
        console.log(currentRound)
        score += currentRound;
    }
    return score;
}

//console.log("Total: " + game());

const buttons = document.querySelectorAll('button');

const announceScore = document.createElement('div');
const body = document.querySelector('body');


// track scores
let playerScore = 0;
let computerScore = 0;

//announce the game
let announcement = "Let's play Rock Paper Scissors!";
announceScore.textContent = announcement;
body.appendChild(announceScore);

let newAnnouncement = "";

// play a round
buttons.forEach((button) => {
    
    button.addEventListener('click', () => {
    
        let computerChoice = getComputerChoice();
        let playerChoice = button.id;
        score = playRound(playerChoice, computerChoice);
        console.log(score);


        // add score if game not over
        if (playerScore < 5 && computerScore < 5) {
            if (score === 1) {
                playerScore += 1;
                newAnnouncement = `${playerChoice} beats ${computerChoice}! `

            } else if (score === -1) {
                computerScore += 1;
                newAnnouncement = `${playerChoice} loses to ${computerChoice}. `
            } else {
                newAnnouncement = "Tie! "
            }
        };

        // game complete, no more score changes
        if (playerScore === 5) {
            newAnnouncement = "You won! Final ";
        } else if (computerScore === 5) {
            newAnnouncement = "You lost. Final ";
        };

        announceScore.textContent = (newAnnouncement +  "Score: " + playerScore + " to " + computerScore);
        console.log("Player Score: " + playerScore + " Computer Score: " + computerScore);
    });
});

    



