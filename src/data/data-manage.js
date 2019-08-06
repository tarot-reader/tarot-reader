
import cards from './card-info.js';

const CARDS_KEY = 'cards-key';
const REMAINING_CARDS = 'remaining-cards';

const info = {
    storage: window.localStorage,
    save(key, item) {
        const json = JSON.stringify(item);
        info.storage.setItem(key, json);
    },
    get(key) {
        const json = info.storage.getItem(key);
        const item = JSON.parse(json);
        return item;
    },
    getCards() {
        let card = info.get(CARDS_KEY);
        if(!card) {
            info.save(CARDS_KEY, cards);
            card = cards;
        }
        return card;
    },
    randomWholeNum(num) {
        return Math.floor(Math.random() * num);
    },
    randomCards(numOfCards) {
        let pulledCards = [];
        info.getCards();

        const cardArray = info.get(CARDS_KEY);
        const cardCopy = cardArray.slice();
        
        for(let i = 0; i < numOfCards; i++) {
            let num = 23;
            num--;
            const randomNumber = info.randomWholeNum(num);
           
            const cardObject = cardCopy[randomNumber];
            cardCopy.splice(randomNumber, 1);
            info.save(REMAINING_CARDS, cardCopy);
          
            pulledCards.push(cardObject);
            
    
        }
        return pulledCards;
    }


};

export default info;