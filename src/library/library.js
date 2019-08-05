import info from '../data/data-manage.js';
import renderCard from './render-card.js';

const main = document.getElementById('main');
const cardLibrary = info.getCards();

for(let i = 0; i < cardLibrary.length; i++) {
    let newCard = renderCard(cardLibrary[i]);
    main.appendChild(newCard);
}