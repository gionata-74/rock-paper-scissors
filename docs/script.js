console.log("Game is running");


function getComputerChoice(){

    const choices = ['rock','paper','scissors'];
    let rand = Math.floor(Math.random() * 3);
    return choices[rand];

}


function playRound(playerChoice, computerChoice){

    playerChoice = playerChoice.toLowerCase();

    if(playerChoice === computerChoice){

        return "It's a tie!";
    }
    else if(playerChoice === "paper" && computerChoice === "rock"){

        return `You win! ${playerChoice} beats ${computerChoice}`;
    }
    else if(playerChoice === "rock" && computerChoice === "scissors"){

        return `You win! ${playerChoice} beats ${computerChoice}`;
    }
    else if(playerChoice === "scissors" && computerChoice === "paper"){

        return `You win! ${playerChoice} beats ${computerChoice}`;
    }
    else { return `You lose! ${computerChoice} beats ${playerChoice}` }

}


let playerCount = 0;
let playerScore = document.getElementById("pscore");

let computerCount = 0;
let computerScore = document.getElementById("cscore");

let winner = document.getElementById("winner");

const buttons = document.querySelectorAll("button");


function game(){

    playerScore.innerText = "Your score: " + 0;
    computerScore.innerText = "Computer score: " + 0;

    buttons.forEach((button) => {

        button.addEventListener('click', () => {

            let round = playRound(button.id, getComputerChoice());

            if (round.includes("win")) {

            playerCount++;
            playerScore.innerText = "Your score: " + playerCount;
            winner.innerText = round.substring(8);

            } else if (round.includes("lose")) {

                computerCount++;
                computerScore.innerText = "Computer score: " + computerCount;
                winner.innerText = round.substring(9)

            } else {
                winner.innerText = round;
            }

            if (playerCount >= 5) {

                playerCount = 0;
                computerCount = 0;

                winner.innerText = "You win the game!";
                alert("You win the game!")
                location.reload();

            } else if (computerCount >= 5) {

                playerCount = 0;
                computerCount = 0;

                winner.innerText = "You lose the game!";
                alert("You lost the game!")
                location.reload();

            } else if (playerCount >= 5 && computerCount >= 5) {

                playerCount = 0;
                computerCount = 0;

                winner.innerText = "You have tied the game!";
                alert("It's a tie")
                location.reload()


            }

        })
    });

}


game();