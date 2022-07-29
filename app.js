const comChoiceDis = document.getElementById('computer-choice');
const yourChoiceDis = document.getElementById('your-choice');
const resultDis = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
const comScore = document.getElementById('computer-score');
const userScore = document.getElementById('user-score');
let yourScore = 0;
let computerScore = 0;
let userChoice;
let comChoice;

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id;
    yourChoiceDis.innerHTML = userChoice;
    generateComputerChoices();
    getResult();
    console.log('User '+ yourScore +' Computer '+ computerScore);
    userScore.innerHTML = yourScore;
    comScore.innerHTML = computerScore;
}));

const generateComputerChoices = () =>{
    const ranNumber = Math.floor(Math.random() * possibleChoices.length + 1);
    console.log(ranNumber);

    if(ranNumber === 1){
        comChoice = 'rock';
        comChoiceDis.innerHTML = comChoice;
    }
    if(ranNumber === 2){
        comChoice = 'paper';
        comChoiceDis.innerHTML = comChoice;
    }
    if(ranNumber === 3){
        comChoice = 'scissors';
        comChoiceDis.innerHTML = comChoice;
    }
};

const getResult = () => {
    if(comChoice === userChoice){
        resultDis.innerHTML = 'It is a Draw';
    }
    if(comChoice === 'rock' && userChoice === 'paper'){
        resultDis.innerHTML = 'Computer Win!';
        computerScore += 1;
    }
    if(comChoice === 'rock' && userChoice === 'scissors'){
        resultDis.innerHTML = 'Computer Win!';
        computerScore += 1;
    }
    if(comChoice === 'paper' && userChoice === 'rock'){
        resultDis.innerHTML = 'You Win!';
        yourScore += 1;
    }
    if(comChoice === 'paper' && userChoice === 'scissors'){
        resultDis.innerHTML = 'You Win!';
        yourScore += 1;

    }
    if(comChoice === 'scissors' && userChoice === 'paper'){
        resultDis.innerHTML = 'Computer Win!';
        computerScore += 1;
    }
    if(comChoice === 'scissors' && userChoice === 'rock'){
        resultDis.innerHTML = 'You Win!';
        yourScore += 1;
    }
    if(yourScore > 4 && yourScore < 6 && yourScore > computerScore){
      alert('Game Over You win!');
      window.location.reload();
    }
    if(computerScore > 4 && computerScore < 6 && computerScore > yourScore){
      alert('Game Over Computer Win!');
      window.location.reload();
    }
}
