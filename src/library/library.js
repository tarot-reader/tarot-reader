import info from '../data/data-manage.js';
import renderCard from './render-card.js';

const main = document.getElementById('main');
const cardLibrary = info.getCards();

for(let i = 0; i < cardLibrary.length; i++) {
    let newCard = renderCard(cardLibrary[i]);
    main.appendChild(newCard);
}

const birthday = info.get('birthdays');

const birthMonthFirstDigit = +birthday[5];
const birthMonthSecondDigit = +birthday[6];

function findBirthdayCard(M1, M2) {
    if(M1 === 0 && M2 === 1) {
        return 'The Star';
    } else if(M1 === 0 && M2 === 2) {
        return 'The Moon';
    } else if(M1 === 0 && M2 === 3) {
        return 'The Emperor';
    } else if(M1 === 0 && M2 === 4) {
        return 'The Hierophant';
    } else if(M1 === 0 && M2 === 5) {
        return 'The Lovers';
    } else if(M1 === 0 && M2 === 6) {
        return 'The Chariot';
    } else if(M1 === 0 && M2 === 7) {
        return 'Strength';
    } else if(M1 === 0 && M2 === 8) {
        return 'The Hermit';
    } else if(M1 === 0 && M2 === 9) {
        return 'Justice';
    } else if(M1 === 1 && M2 === 0) {
        return 'Death';
    } else if(M1 === 1 && M2 === 1) {
        return 'Temperance';
    } else if(M1 === 1 && M2 === 2) {
        return 'The Devil';
    }
}

const birthdayCardId = findBirthdayCard(birthMonthFirstDigit, birthMonthSecondDigit);
const birthdayCardElement = document.getElementById(birthdayCardId);
birthdayCardElement.classList.add('birthday');
const birthdayMessage = document.createElement('p');
birthdayMessage.textContent = 'This is your birthday card!';
birthdayCardElement.appendChild(birthdayMessage);