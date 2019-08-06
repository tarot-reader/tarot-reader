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

renderHand(resultOf);

export default function renderHand(allHandsArray) {

    for(let i = 0; i < allHandsArray.length; i++) {
        const handArray = allHandsArray[i];
        
        const div = document.createElement('div');
        div.classList.add('hand' + i);
        
        for(let i = 0; i < handArray.length; i++) {
            const cardObject = handArray[i];
            
            
            const img = document.createElement('img');
            img.src = cardObject.imgSrc;
            img.alt = cardObject.altId;
            div.appendChild(img);
            
            
        }
        const p = document.createElement('p');
        p.textContent = 'a word';
        div.appendChild(p);
        
        return div;
    }
    
}
