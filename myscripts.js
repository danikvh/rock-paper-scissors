const result = document.querySelector('#results');
const playerScore = document.querySelector('#player-result');
const computerScore = document.querySelector('#computer-result');
const winner = document.querySelector('#winner');
const buttons = document.querySelectorAll('button');


//Event Listeners

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const playerSelection = button.getAttribute('id');
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);

        if (playerScore.textContent == 5 || 
            computerScore.textContent == 5) {
                declareWinner();
                disableButtons();
            }
    });
});




//Functions

function computerPlay() {
    let juego = ["rock", "paper", "scissors"];
    const rand = juego[Math.floor(Math.random() * juego.length)];
    return rand;
}

function playRound(player, computer) {
    if (computer === player) { 
        displayResults("Tie!"); 
    } else {
        if (computer === "rock") {
            if (player === "paper") { 
                displayResults("You win! Paper beats Rock"); 
                playerWin();
            } else { 
                displayResults("You lose! Rock beats Scissors"); 
                computerWin();
            }
        } if (computer === "paper") {
            if (player === "rock") { 
                displayResults("You lose! Paper beats Rock"); 
                computerWin();
            } else { 
                displayResults("You win! Scissors beats Paper"); 
                playerWin();
            }
        } if (computer === "scissors") {
            if (player === "rock") { 
                displayResults("You win! Rock beats Scissor"); 
                playerWin();
            } else { 
                displayResults("You lose! Scissors beats Paper"); 
                computerWin();
            }
        }
    }
}

function displayResults(str) {
    result.textContent = str;
}

function playerWin() {
    let score = playerScore.textContent;
    score++;
    playerScore.textContent = score;
}

function computerWin() {
    let score = computerScore.textContent;
    score++;
    computerScore.textContent = score;
}

function declareWinner() {
    if (playerScore.textContent == 5) {
        winner.textContent = "You have won this game!";
    } else if (computerScore.textContent == 5) {
        winner.textContent = "CPU won this game.";
    }
}

function disableButtons() {
    buttons.forEach((button) => {
        button.disabled = true;
    });
}

/* function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    let playerSelection = prompt("Rock, paper or scissors?").toLocaleLowerCase();
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    if (result == 1) { playerScore++; } 
    else if (result == 0) { computerScore++; }
    else { playerScore++; computerScore++; }

    console.log ("Your score:", playerScore, " Enemy Score:", computerScore);
    
    if ( playerScore > computerScore) {console.log("You won this game!"); }
    else if (playerScore < computerScore) { console.log("You lost this game!"); }
    else { console.log ("You tied this game!"); }
} */


//game();
