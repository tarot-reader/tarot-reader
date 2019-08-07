
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
    isFlipped(object) {
        const isFlipped = info.randomWholeNum(2);
         
        if(isFlipped === 1) {
            object.displayDirection = 'upside-down';
        } else {
            object.displayDirection = 'upside-up';
        }
    
    },
    randomCards(numOfCards) {
        let pulledCards = [];
        info.getCards();

        const cardArray = info.get(CARDS_KEY);
        const cardCopy = cardArray.slice();
        let num = 23;
        
        for(let i = 0; i < numOfCards; i++) {
            num--;
            
            const randomNumber = info.randomWholeNum(num);
           
            let userName = info.get('names');
            if(userName === null) {
                userName = 'stranger';
                return userName;
            }

            const cardObject = cardCopy[randomNumber];
            cardObject.user = userName;
            info.isFlipped(cardObject);

            cardCopy.splice(randomNumber, 1);
            info.save(REMAINING_CARDS, cardCopy);


            pulledCards.push(cardObject);
            info.save('hand', pulledCards); 
            
        }
        return pulledCards;
    },


};

export default info;