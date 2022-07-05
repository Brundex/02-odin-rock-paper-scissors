//Computer selection functions until line 91

// call randomNumber function and use switch cases to assign each number to a game value
function computerPlay(){
    let computerChoice = randomNumber();

    switch(computerChoice){
        case 1:
            computerChoice = "ROCK";
            return computerChoice;
        case 2:
            computerChoice = "PAPER";
            return computerChoice;
        case 3:
            computerChoice = "SCISSORS";
            return computerChoice;
    }
}

//helper function to randomize between 1-3. 
//Taken from https://www.educative.io/answers/how-to-generate-a-random-number-between-a-range-in-javascript
function randomNumber(min=1, max=4){
    let difference = max - min;

    let rand = Math.random();

    rand = Math.floor(rand * difference);

    rand = rand + min;

    return rand;
}

//helper function to figure out winner and address all possible outcomes

const pointWinnerDiv = document.getElementById('point-winner');

function declareWinner(playerSelection, computerSelection){
    if (computerScore === 5 || playerScore === 5) {
        pointWinnerDiv.textContent = `$()`
        return
    }
    switch(playerSelection) {
        case "ROCK":
            if(computerSelection == "ROCK"){
                pointWinnerDiv.textContent = "It's a tie!";
                return "tie";
            }
            else if(computerSelection == "PAPER"){
                pointWinnerDiv.textContent = "Point for me! Gotcha loser!";
                return "computer";
            }
            else{
                pointWinnerDiv.textContent = "Point for you. Ouch! Easy!";
                return "player";
            }

        case "PAPER":
            if(computerSelection == "ROCK"){
                pointWinnerDiv.textContent = "Point for you. Ouch! Easy!";
                return "player";
            }
            else if(computerSelection == "PAPER"){
                pointWinnerDiv.textContent = "It's a tie!";     
                return "tie";         
            }
            else{
                pointWinnerDiv.textContent = "Point for me! Gotcha loser!";
                return "computer";
            }

        case "SCISSORS":
            if(computerSelection == "ROCK"){
                pointWinnerDiv.textContent = "Point for me! Gotcha loser!";
                return "computer";
            }
            else if(computerSelection == "PAPER"){
                pointWinnerDiv.textContent = "Point for you. Ouch! Easy!";
                return "player";
            }
            else{
                pointWinnerDiv.textContent = "It's a tie!";
                return "tie";
            }
    }
}

const playerScoreDiv = document.getElementById('player-score');
const computerScoreDiv = document.getElementById('computer-score');
let playerScore = 0;
let computerScore = 0;


const buttons = document.querySelectorAll('.btn');
buttons.forEach(function(currentBtn) {
  currentBtn.addEventListener('click', playRound)
});

const resetBtn = document.getElementById('reset')
resetBtn.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreDiv.textContent = "";
    computerScoreDiv.textContent = "";
    pointWinnerDiv.textContent = "";

 })

 function playRound(e) {
    if (computerScore < 5 && playerScore <= 5){
        playerSelection = e.target.id;
        computerSelection = computerPlay();
        winner = declareWinner(playerSelection, computerSelection);
        if (winner === "player"){
            playerScore++;
            if (playerScore === 5){
                pointWinnerDiv.textContent = "You win the game!";
                playerScoreDiv.textContent = `Player Score: ${playerScore}`;
                return;
            }
            console.log(playerScore);
            console.log(computerScore);
        }
        else if (winner === "computer"){
            computerScore++;
            if (computerScore === 5){
                pointWinnerDiv.textContent = "I win the game!";
                computerScoreDiv.textContent = `Computer Score: ${computerScore}`;
                return;
            }
            console.log(playerScore);
            console.log(computerScore); 
        }

        playerScoreDiv.textContent = `Player Score: ${playerScore}`;
        computerScoreDiv.textContent = `Computer Score: ${computerScore}`;
        

    }
    else if (playerScore === 5){
        playerScoreDiv.textContent = "";
        computerScoreDiv.textContent = "";
        
    }
    else if (computerScore === 5){
        playerScoreDiv.textContent = "";
        computerScoreDiv.textContent = "";
    }

}