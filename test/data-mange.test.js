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


