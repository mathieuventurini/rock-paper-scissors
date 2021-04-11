

let circles = document.querySelectorAll('.circles');
let allSymbols = document.querySelector('.symbols')
let symbolPicked = document.querySelector('.picked');
let paperCircle = document.querySelector('.paper-circle');
let scissorCircle = document.querySelector('.scissors-circle');
let rockCircle = document.querySelector('.rock-circle');
let symbolsNotPicked = document.querySelectorAll('.symbol-picked');
let paperPicked = document.querySelector('.paperpicked');
let scissorsPicked = document.querySelector('.scissorspicked');
let rockPicked = document.querySelector('.rockpicked');
const choices = ['paper', 'scissors', 'rock'];
let computerPlay = document.getElementById('computer-play');
let playerScore = document.querySelector('.player-score');
let computerScore = document.querySelector('.computer-score');
let winnerTable = document.querySelector('.winnertable')


userChoice = circles.forEach(circles =>{
    circles.getAttribute('id')
})

paperCircle.addEventListener('click', function(){
    scissorsPicked.style.display = 'none';
    rockPicked.style.display = 'none';
});
scissorCircle.addEventListener('click', function(){
    paperPicked.style.display = 'none';
    rockPicked.style.display = 'none';
});

rockCircle.addEventListener('click', function(){
    scissorsPicked.style.display = 'none';
    paperPicked.style.display = 'none';
});



circles.forEach(circles => {
    circles.addEventListener('click', e => {
        allSymbols.style.display = 'none';
        symbolPicked.style.display = 'flex';
        allSymbols.style.pointerEvents = 'none';
        symbolPicked.style.pointerEvents = 'none';
        userChoice = circles.getAttribute('id');
        setTimeout(pickRandomChoice, 300);
        
    });
});

function pickRandomChoice(){

    let result = choices[Math.floor(Math.random() * choices.length)]; 
    if(result === 'paper'){
        document.querySelector('.computer-paper').classList.add('computer-choice-display');
    }
    else if(result === 'scissors'){
        document.querySelector('.computer-scissors').classList.add('computer-choice-display');
    }
    else if(result === 'rock'){
        document.querySelector('.computer-rock').classList.add('computer-choice-display');
    }
    
    if(userChoice === result){

        setTimeout(() => {
            winnerTable.style.opacity= '1';
            winnerTable.style.transition= '0.7';
            document.getElementById('draw').style.display = 'block';
        }, 900);

    }
    else if(
    (userChoice === 'paper' && result === 'rock')
    ||
    (userChoice === 'scissors' && result === 'paper')
    ||
    (userChoice === 'rock' && result === 'scissors')
    )
    {
        setTimeout(() => {
            updatePlayerScore(1)
            winnerTable.style.opacity= '1';
            winnerTable.style.transition= '0.7';
            document.getElementById('winner').style.display = 'block';    
        }, 900);  
    };

    if(
    (userChoice === 'rock' && result === 'paper')
    ||
    (userChoice === 'paper' && result === 'scissors')
    ||
    (userChoice === 'scissors' && result === 'rock')
    ){
        setTimeout(() => {
            updateComputerScore(1)
            winnerTable.style.opacity= '1';
            winnerTable.style.transition= '0.7';
            document.getElementById('looser').style.display = 'block';   
        }, 900);

    }

    return result;

};



// SCORE 


let yourScore = 0;
let pcScore = 0;


playerScore.innerText = yourScore;
computerScore.innerText = yourScore;

function updatePlayerScore(value){
    yourScore += value;
    playerScore.innerText = yourScore;

}

function updateComputerScore(value){
    pcScore += value;
    computerScore.innerText = pcScore;

}

// RESTART

let restart = document.querySelector('.restart');

restart.addEventListener('click', () => {
    paperPicked.style.display = 'block';
    scissorsPicked.style.display = 'block';
    rockPicked.style.display = 'block';
    allSymbols.style.display = 'flex';
    symbolPicked.style.display = 'none';
    allSymbols.style.pointerEvents = 'auto';
    symbolPicked.style.pointerEvents = 'auto';
    winnerTable.style.opacity = '0';
    winnerTable.style.transition = '0.1s';
    document.querySelector('.computer-paper').classList.remove('computer-choice-display');
    document.querySelector('.computer-scissors').classList.remove('computer-choice-display');
    document.querySelector('.computer-rock').classList.remove('computer-choice-display');
    document.getElementById('winner').style.display = 'none';
    document.getElementById('looser').style.display = 'none';
    document.getElementById('draw').style.display = 'none';

})