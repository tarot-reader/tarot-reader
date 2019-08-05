
import cards from './card-info.js';

const CARDS_KEY = 'cards-key';

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

};

export default info;