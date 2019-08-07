const test = QUnit.test;

QUnit.module('Render Button');

test('test name', assert => {
    // arrange
    const card = {
        name: 'The Fool',
        number: 0,
        readingText: 'Thoughtlessness, folly, lightheartedness, innocence. Purity of heart. Lack of discipline. One seeking fulfillment and experience. Freedom, lack of restraint.',
        readingReversed: 'Carelessness, vanity, indecision, apathy, poor judgement. Lack of control.',
        imgSrc: '/assets/the-fool.webp',
        altId: 'A picture of the fool card',
    },
    const expected = '<button value="The Fool" id="button1"><img src="./assets/the-fool.webp"></button>';
    
    // act
    
    // assert
    assert.equal(true, true);
});