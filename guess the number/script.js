let randomNumber = parseInt(Math.random() * 100 + 1)

const selectSubmit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
    selectSubmit.addEventListener('click', function(e){
        e.preventDefault();
        const inputGuess = parseInt(userInput.value);
        console.log(inputGuess);
        validateGuess(inputGuess);
    });
}

function validateGuess(inputGuess){
    if (isNaN(inputGuess)) {
        alert('Please enter a valid number');
    } else if(inputGuess < 1){
        alert('please enter a number more than 1');
    }
    else if(inputGuess > 100){
        alert('Please enter a number less than 100');
    }else{
        prevGuess.push(inputGuess);
        if (numGuess === 11){
            displayGuess(inputGuess);
            displayMessage(`Game over. Random number was ${randomNumber}`)
            endgame();
        }else{
            displayGuess(inputGuess);
            checkGuess(inputGuess);
        }
    }
}

function checkGuess(inputGuess){
    if (inputGuess === randomNumber){
        displayMessage(`You guessed it right`);
    }else if(inputGuess < randomNumber){
        displayMessage(`Number is TOOO low`);
    }else if(inputGuess > randomNumber){
        displayMessage(`Number is TOO High`)
    }
}

function displayGuess(inputGuess){
    userInput.value = '';
    guessSlot.innerHTML += `${inputGuess}, `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}
function endgame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = '<h2 id = "newGame"> Start new Game</h2>';
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGamebutton = document.querySelector('#newGame')
    newGamebutton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random() * 100 + 1)
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
    });
}
