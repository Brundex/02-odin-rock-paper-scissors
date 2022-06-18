//helper function to randomize between 1-3. 
//Taken from https://www.educative.io/answers/how-to-generate-a-random-number-between-a-range-in-javascript
function randomNumber(min=1, max=4){
    let difference = max - min;

    let rand = Math.random();

    rand = Math.floor(rand * difference);

    rand = rand + min;

    return rand;
}

//call randomNumber function and use switch cases to assign each value to a game value
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
let playerScore = 0;
let computerScore = 0;
function playRound(playerSelection, computerSelection){
    promptUntilValid(playerSelection);
    computerSelection = computerPlay();
    console.log(playerSelection);
    console.log(computerSelection);
    declareWinner(playerSelection, computerSelection);
}

playRound(promptUntilValid(), "PAPER");

//helper function
function promptUntilValid(playerSelection){
    invalidValue = true;
    while(invalidValue){
        playerSelection = prompt("Rock, Paper, Scissors?").toUpperCase();
        if (playerSelection === "ROCK" || playerSelection === "PAPER" || playerSelection === "SCISSORS"){
            return playerSelection;
        }
    }
}

//helper function
function declareWinner(playerSelection, computerSelection){
    switch(playerSelection) {
        case "ROCK":
            if(computerSelection == "ROCK"){
                console.log("It's a tie!");
                break;
            }
            else if(computerSelection == "PAPER"){
                console.log("Ha! Got ya!");
                computerScore++;
                break;
            }
            else{
                console.log("Ouch! Easy!");
                playerScore++;
                break;
            }
        case "PAPER":
            if(computerSelection == "ROCK"){
                console.log("Ouch! Easy!");
                playerScore++;
                break;
            }
            else if(computerSelection == "PAPER"){
                console.log("It's a tie!");     
                break;           
            }
            else{
                console.log("Ha! Got ya!");
                computerScore++;
                break;
            }

        case "SCISSORS":
            if(computerSelection == "ROCK"){
                console.log("Ha! Got ya!");
                computerScore++;
                break;
            }
            else if(computerSelection == "PAPER"){
                console.log("Ouch! Easy!");
                playerScore++;
                break;
            }
            else{
                console.log("It's a tie!");
                break;
            }
    }
}
