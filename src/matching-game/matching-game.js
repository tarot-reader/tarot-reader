import info from '../data/data-manage.js';

// generate array of 8 cards
const eightCardArray = info.randomCards(8);
console.log(eightCardArray);

// duplicate array to make array of 16 cards
// shuffle array
// render cards as buttons
// on button click, reveal card and disable button. Add id to a revealed array.
// on next button click, reveal card and check to see if it's a match. If it's a match, keep both cards revealed. If not, hide both cards again.
// display win message with play again button 