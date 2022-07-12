function computerPlay() {
    let juego = ["rock", "paper", "scissors"];
    const rand = juego[Math.floor(Math.random() * juego.length)];
    return rand;
}

function playRound(player, computer) {
    if (computer === player) { console.log("Tie!"); return 2; }
    else {
        if (computer === "rock") {
            if (player === "paper") { 
                console.log("You win! Paper beats Rock"); 
                return 1;
            } else { 
                console.log("You lose! Rock beats Scissors"); 
                return 0;
            }
        } if (computer === "paper") {
            if (player === "rock") { 
                console.log("You lose! Paper beats Rock"); 
                return 0;
            } else { 
                console.log("You win! Scissors beats Paper"); 
                return 1;
            }
        } if (computer === "scissors") {
            if (player === "rock") { 
                console.log("You win! Rock beats Scissor"); 
                return 1;
            } else { 
                console.log("You lose! Scissors beats Paper"); 
                return 0;
            }
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, paper or scissors?").toLocaleLowerCase();
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        if (result == 1) { playerScore++; } 
        else if (result == 0) { computerScore++; }
        else { playerScore++; computerScore++; }
    }
    console.log ("Your score:", playerScore, " Enemy Score:", computerScore);
    if ( playerScore > computerScore) {console.log("You won this game!"); }
    else if (playerScore < computerScore) { console.log("You lost this game!"); }
    else { console.log ("You tied this game!"); }
}



game();
