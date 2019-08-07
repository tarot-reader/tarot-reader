import renderCard from '../src/library/render-card.js';

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