import renderCard from '../src/library/render-card.js';

const test = QUnit.test;

QUnit.module('Render library');

test('Render one card', assert => {
    // arrange
    const toRender = {
        name: 'The Fool',
        number: 0,
        readingText: 'Thoughtlessness, folly, lightheartedness, innocence. Purity of heart. Lack of discipline. One seeking fulfillment and experience. Freedom, lack of restraint.',
        readingReversed: 'this is what shows up if the card is upside down',
        imgSrc: 'assets/the-fool.webp',
        altId: 'The Fool'
    };
    const expected = '<div class="card" id="The Fool"><img src="assets/the-fool.webp" alt="The Fool"><p>Thoughtlessness, folly, lightheartedness, innocence. Purity of heart. Lack of discipline. One seeking fulfillment and experience. Freedom, lack of restraint.</p></div>';
    
    // act
    const rendered = renderCard(toRender);
    const html = rendered.outerHTML;
    
    // assert
    assert.equal(expected, html);
});