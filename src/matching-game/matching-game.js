import info from '../data/data-manage.js';
import renderButton from './render-button.js';

// generate array of 8 cards
const eightCardArray = info.randomCards(8);
console.log(eightCardArray);

// get DOM element by ID
const cardsDisplay = document.getElementById('cards-display');

// get cards by class
const cards = document.getElementsByClassName('card');

// duplicate array to make array of 16 cards
const sixteenCardArray = [];
for(let i = 0; i < eightCardArray.length; i++) {
    sixteenCardArray.push(eightCardArray[i]);
    sixteenCardArray.push(eightCardArray[i]);
}
console.log(sixteenCardArray);
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
console.log(shuffledArray);

// render cards as buttons
for(let i = 0; i < shuffledArray.length; i++){
    renderButton(shuffledArray[i], i);
    const button = renderButton(shuffledArray[i], i);
    cardsDisplay.appendChild(button);
    
}
// on button click, reveal card and disable button. Add id to a revealed array.

// on next button click, reveal card and check to see if it's a match. If it's a match, keep both cards revealed. If not, hide both cards again.
// display win message with play again button 