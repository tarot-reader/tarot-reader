import info from '../data/data-manage.js';

// const placement = document.getElementById('placement');

function renderHand(array) {
    const section = document.createElement('section');

    for(let i = 0; i < array.length; i++) {
        const smallerArray = array[i];
        const objectFromSmallerArray = smallerArray[0];
        
        
        const readDiv = document.createElement('div');
        readDiv.classList.add('reading');
        readDiv.id = 'example';
    
        const p = document.createElement('p');
        const userNameString = ' ' + objectFromSmallerArray.user;

        let numberValueForHandNumber = i;
        numberValueForHandNumber += 1;

        p.textContent = 'Hello' + userNameString + '! This was reading number ' + numberValueForHandNumber + '!';
        readDiv.appendChild(p);
        
        const cardsDiv = document.createElement('div');
        cardsDiv.classList.add('cards');
        readDiv.appendChild(cardsDiv);

        for(let j = 0; j < smallerArray.length; j++) {
            const singleObject = smallerArray[j];

            const singleCardDiv = document.createElement('div');
            singleCardDiv.classList.add('card');
            cardsDiv.appendChild(singleCardDiv);
            
            const cardImg = document.createElement('img');
            const isFlippedStatus = singleObject.displayDirection;
            if(isFlippedStatus === 'upside-down') {
                cardImg.classList.add('flipped');
            } else if(isFlippedStatus === 'upside-up') {
                cardImg.classList.remove('flipped');
            }
            const cardImgSrc = singleObject.imgSrc;
            cardImg.src = cardImgSrc;
            singleCardDiv.appendChild(cardImg);

            const fortuneTitle = document.createElement('p');
            if(j === 0) {
                fortuneTitle.textContent = 'Your Future';
            } else if(j === 1) {
                fortuneTitle.textContent = 'Your Present';
            } else if(j === 2) {
                fortuneTitle.textContent = 'Your Past';
            }
            
            singleCardDiv.appendChild(fortuneTitle);

            const fortuneString = document.createElement('div');
            const fortuneUp = singleObject.readingText;
            const fortuneDown = singleObject.readingReversed;
            if(isFlippedStatus === 'upside-down') {
                fortuneString.textContent = fortuneDown;
            } else if(isFlippedStatus === 'upside-up') {
                fortuneString.textContent = fortuneUp;
            }
            singleCardDiv.appendChild(fortuneString);

        
    
            
        }
    
        section.appendChild(readDiv);
    }
    return section;
}

const megaHandArray = info.get('hands-array');

// const totalCreatedHTML = renderHand(megaHandArray);
// placement.appendChild(totalCreatedHTML);

export default renderHand;
