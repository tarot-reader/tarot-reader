import info from '../data/data-manage.js';
import renderButton from './render-button.js';

// generate array of 8 cards
const eightCardArray = info.randomCards(8);

// get DOM element by ID
const cardsDisplay = document.getElementById('cards-display');


// get cards elements by class
const cards = document.getElementsByClassName('card');
const fronts = document.getElementsByClassName('front');
const backs = document.getElementsByClassName('back');

// duplicate array to make array of 16 cards
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

// render cards as buttons
for(let i = 0; i < shuffledArray.length; i++){
    renderButton(shuffledArray[i], i);
    const button = renderButton(shuffledArray[i], i);
    cardsDisplay.appendChild(button);
}
// on button click, reveal card and disable button. Add id to a revealed array.

const cardArray = [...cards];
console.log(cardArray);
for(let i = 0; i < cardArray.length; i++) {
    cardArray[i].addEventListener('click', (event) => {
        console.log(event.currentTarget);
        const button = event.currentTarget;
        button.childNodes[0].classList.add('hidden');
        button.childNodes[1].classList.remove('hidden');
    });
}

// on next button click, reveal card and check to see if it's a match. If it's a match, keep both cards revealed. If not, hide both cards again.
// display win message with play again button 