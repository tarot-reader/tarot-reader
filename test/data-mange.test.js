import info from '../src/data/data-manage.js';
import cards from '../src/data/card-info.js';

const CARDS_KEY = 'cards-key';

const test = QUnit.test;

info.storage = window.sessionStorage;

QUnit.testStart(() => {
    info.storage.clear();
});

test('Is information being saved and retrieved from local storage', function(assert) {
    //Arrange
    info.save('cat', { name: 'Borg destroyer of worlds' });
    const expected = info.get('cat');

    // Set up your parameters and expectations
    const actual = { name: 'Borg destroyer of worlds' };
    //Act 
    // Call the function you're testing and set the result to a const

    //Assert
    assert.deepEqual(expected, actual);
});

test('Is information being bootstrapped', function(assert) {

    const expected = info.getCards();

    const actual = cards;
    
    assert.deepEqual(expected, actual);
});

test('Is the array 3 long', function(assert) {

    info.getCards(CARDS_KEY);

    const ranArray = info.randomCards(3);

    const expected = ranArray.length;

    const actual = 3;
    
    assert.deepEqual(expected, actual);
});

test('Is the object being altered?', function(assert) {

    const cardArray = info.getCards();
    const firstCard = cardArray[0];

    info.save('user', 'Anne');

    const user = info.get('user');
    
    info.getCards(CARDS_KEY);

    const testObject = firstCard;

    firstCard.user = user;
    firstCard.displayDirection = 'up';

    const expected = {
        user: 'Anne',
        name: 'The Fool',
        number: 0,
        readingText: 'Thoughtlessness, folly, lightheartedness, innocence. Purity of heart. Lack of discipline. One seeking fulfillment and experience. Freedom, lack of restraint.',
        readingReversed: 'Carelessness, vanity, indecision, apathy, poor judgement. Lack of control.',
        imgSrc: '/assets/the-fool.webp',
        altId: 'A picture of the fool card',
        displayDirection: 'up',
    };

    const actual = testObject;
    
    assert.deepEqual(expected, actual);
});


