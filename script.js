// simulate one round
function playRound(playerSelection=playerSelection, computerSelection=computerPlay()){
    console.log(`You pick ${playerSelection}`);
    console.log(`I pick ${computerSelection}`);
    winner = declareWinner(playerSelection, computerSelection);
    console.log(`winner is ${winner}`);
}
const buttons = document.querySelectorAll('.btn')
buttons.forEach(function(currentBtn){
  currentBtn.addEventListener('click', event => {
    console.log( event.target.id );
    return event.target.id;
})
})
// buttons.addEventListener('click', function (this.id));

// playRound();