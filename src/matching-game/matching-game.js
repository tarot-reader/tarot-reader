import info from '../data/data-manage.js';
import renderButton from './render-button.js';


const cardsDisplay = document.getElementById('cards-display');
const winMessage = document.getElementById('win-message');
const cards = document.getElementsByClassName('card');
const resetButton = document.getElementById('reset-button');
const background = document.getElementById('background');

const eightCardArray = info.randomCards(8);
const sixteenCardArray = [];
for(let i = 0; i < eightCardArray.length; i++) {
    sixteenCardArray.push(eightCardArray[i]);
    sixteenCardArray.push(eightCardArray[i]);
}

// shuffle array function from https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript
function shuffle(array) {
    let temporaryValue, randomIndex;
    for(let i = 0; i < array.length; i++) {
        randomIndex = Math.floor(Math.random() * i);
        temporaryValue = array[i];
        array[i] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
const shuffledArray = shuffle(sixteenCardArray);


for(let i = 0; i < shuffledArray.length; i++) {
    renderButton(shuffledArray[i], i);
    const button = renderButton(shuffledArray[i], i);
    cardsDisplay.appendChild(button);
}


const cardArray = [...cards];
let openedCards = [];
let openedButtons = [];
let totalMatches = [];
for(let i = 0; i < cardArray.length; i++) {
    cardArray[i].addEventListener('click', (event) => {
        const button = event.currentTarget;
        button.childNodes[0].classList.add('hidden');
        button.childNodes[1].classList.remove('hidden');
        openedCards.push(button.value);
        openedButtons.push(button);
        cardCheck();
    });
}

function cardCheck() {
    if(openedCards.length < 2) {
        return;
    }

    if(openedCards[0] === openedCards[1]) {
        match();
    } else {
        unmatch();
    }
    openedCards = [];
}
function match() {
    totalMatches.push(openedButtons[0]);
    totalMatches.push(openedButtons[1]);
    openedButtons[0].childNodes[1].classList.add('match');
    openedButtons[1].childNodes[1].classList.add('match');
    openedButtons[0].disabled = true;
    openedButtons[1].disabled = true;
    openedButtons = [];
    if(totalMatches.length === 16) {
        displayWin();
    }

}
function unmatch() {
    for(let i = 0; i < cardArray.length; i++) {
        cardArray[i].disabled = true;
    }
    setTimeout(() => {
        openedButtons[0].childNodes[0].classList.remove('hidden');
        openedButtons[0].childNodes[1].classList.add('hidden');
        openedButtons[1].childNodes[0].classList.remove('hidden');
        openedButtons[1].childNodes[1].classList.add('hidden');
        openedButtons = [];
        for(let i = 0; i < cardArray.length; i++) {
            cardArray[i].disabled = false;
        }
    }, 2000);
}

function displayWin() {
    for(let i = 0; i < cardArray.length; i++) {
        cardArray[i].classList.add('hidden');
        winMessage.classList.remove('hidden');
        cardsDisplay.classList.remove('remove-border');
        background.classList.add('show-background');
    }
}

resetButton.addEventListener('click', () => {
    window.location.reload();
});