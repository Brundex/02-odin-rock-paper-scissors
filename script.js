//helper function to randomize between 1-3. 
//Taken from https://www.educative.io/answers/how-to-generate-a-random-number-between-a-range-in-javascript
function randomNumber(min=1, max=4){
    let difference = max - min;

    let rand = Math.random();

    rand = Math.floor(rand * difference);

    rand = rand + min;

    return rand;
}

function computerPlay(){
    //call randomNumber function and use switch cases to assign each value to a game value
    computerChoice = randomNumber();
    switch(computerChoice){
        case 1:
            return "ROCK";
        case 2:
            return "PAPER";
        case 3:
            return "SCISSORS";
    }
}

console.log(randomNumber());