import renderCard from '../src/library/render-card.js';
import renderHand from '../src/hands/render-hands.js';

const test = QUnit.test;

QUnit.module('Render library');

test('Render one card', assert => {
    // arrange
    const toRender = {
        name: 'The Fool',
        number: 0,
        description: 'Inexperience, one seeking fulfillment, foolishness.',
        readingText: 'Inexperience, one seeking fulfillment, foolishness.',
        readingReversed: 'this is what shows up if the card is upside down',
        imgSrc: 'assets/the-fool.webp',
        altId: 'The Fool'
    };
    const expected = '<div class="card" id="The Fool"><img src="assets/the-fool.webp" alt="The Fool"><p>Inexperience, one seeking fulfillment, foolishness.</p></div>';
    
    // act
    const rendered = renderCard(toRender);
    const html = rendered.outerHTML;
    
    // assert
    assert.equal(expected, html);
});

test('Render one hand', assert => {
    // arrange
    const card1 = {
        user: 'Anne',
        name: 'The Fool',
        number: 0,
        readingText: 'Thoughtlessness, folly, lightheartedness, innocence. Purity of heart. Lack of discipline. One seeking fulfillment and experience. Freedom, lack of restraint.',
        readingReversed: 'Carelessness, vanity, indecision, apathy, poor judgement. Lack of control.',
        imgSrc: '/assets/the-fool.webp',
        altId: 'A picture of the fool card',
        displayDirection: 'upside-down',
    };

    const card2 = {
        user: 'Anne',
        name: 'Justice',
        number: 11,
        readingText: 'Fairness, balance, equality, rightness, legal matters, negotiations.',
        readingReversed: 'Bias, prejudice, bigotry, intolerance, a bad judgement (legal), cruel punishment.',
        imgSrc: '/assets/justice.webp',
        altId: 'A picture of Justice',
        displayDirection: 'upside-down'
    };

    const card3 = {
        user: 'Anne',
        name: 'Death',
        number: 13,
        readingText: 'The end of an era (and a beginning). A reminder of mortality. A great change. A discovery which changes the seeker\'s life direction.',
        readingReversed: 'Lethargy. great inertia, slow or ponderous change, depression. Resisting the inevitable.',
        imgSrc: '/assets/death.webp',
        altId: 'A picture of Death',
        displayDirection: 'upside-up',
    };

    let exampleArray = [];

    exampleArray.push(card1, card2, card3);

    let doubleArray = [];
    doubleArray.push(exampleArray);
    

    const expected = '<section><div class="reading" id="example"><p>Hello Anne! This was reading number 1!</p><div class="cards"><div class="card"><img class="flipped" src="/assets/the-fool.webp"><div>Carelessness, vanity, indecision, apathy, poor judgement. Lack of control.</div><p>Your Future </p></div><div class="card"><img class="flipped" src="/assets/death.webp"><p>Your Present </p><div>Lethargy. great inertia, slow or ponderous change, depression. Resisting the inevitable.</div></div><div class="card"><img src="/assets/justice.webp"><p>Your Past </p><div>Fairness, balance, equality, rightness, legal matters, negotiations.</div></div></div></div></section>';
    
    // act
    const rendered = renderHand(doubleArray);
    const html = rendered.outerHTML;
    
    // assert
    assert.equal(html, expected);
});