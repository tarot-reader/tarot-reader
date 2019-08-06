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
        readingText: 'this is what would show up in the reading',
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

test('Render hand of cards', assert => {

    const testObject1 = {
        name: 'The Fool',
        description: 'Inexperience, one seeking fulfillment, foolishness.',
        imgSrc: 'assets/the-fool.webp',
        altId: 'The Fool',
        side: 'Up'
    };
    
    const testObject2 = {
        name: 'The Fool',
        description: 'Inexperience, one seeking fulfillment, foolishness.',
        imgSrc: 'assets/the-fool.webp',
        altId: 'The Fool',
        side: 'Down'
    };
    
    const testObject3 = {
        name: 'The Fool',
        description: 'Inexperience, one seeking fulfillment, foolishness.',
        imgSrc: 'assets/the-fool.webp',
        altId: 'The Fool',
        side: 'Up'
    };
    
    const testObjectArray = [testObject1, testObject2, testObject3];
    
    const testObjectArrayTwo = [testObject3, testObject2, testObject1];
    
    const testArrayArray = [testObjectArray, testObjectArrayTwo];
    
    
    const resultOf = renderHand(testArrayArray);

    const expected = '<div class="hand0"><img src="assets/the-fool.webp" alt="The Fool"><img src="assets/the-fool.webp" alt="The Fool"><img src="assets/the-fool.webp" alt="The Fool"><p>a word</p></div>';
    const html = resultOf.outerHTML;
    
    // assert
    assert.equal(expected, html);
});