function renderHand(array) {
    const section = document.createElement('section');
    
    for(let i = 0; i < array.length; i++) {
        const smallerArray = array[i];
        const objectFromSmallerArray = smallerArray[0];
        
        const readDiv = document.createElement('div');
        readDiv.classList.add('reading');
        readDiv.id = 'example';
        section.appendChild(readDiv);
        
        const p = document.createElement('p');
        const userNameString = ' ' + objectFromSmallerArray.user;
        let numberValueForHandNumber = i;
        numberValueForHandNumber += 1;
        p.textContent = 'Hello' + userNameString + '! This was reading number ' + numberValueForHandNumber + '!';
        readDiv.appendChild(p);
        
        const cardsDiv = document.createElement('div');
        cardsDiv.classList.add('cards');
        readDiv.appendChild(cardsDiv);
        
        generatePastReading(smallerArray, cardsDiv);
    }
    return section;
}

function generatePastReading(smallerArray, cardsDiv) {
    for(let j = 0; j < smallerArray.length; j++) {
        const singleObject = smallerArray[j];
        const singleCardDiv = document.createElement('div');
        singleCardDiv.classList.add('card');
        cardsDiv.appendChild(singleCardDiv);

        const cardImg = document.createElement('img');
        const isFlippedStatus = singleObject.displayDirection;
        readingOrientation(isFlippedStatus, cardImg);
        const cardImgSrc = singleObject.imgSrc;
        cardImg.src = cardImgSrc;
        singleCardDiv.appendChild(cardImg);

        const fortuneTitle = document.createElement('p');
        // look up from array
        fortuneTitle.textContent = titles[j];
        singleCardDiv.appendChild(fortuneTitle);

        const fortuneString = document.createElement('div');
        const fortuneUp = singleObject.readingText;
        const fortuneDown = singleObject.readingReversed;
        fortuneString.textContent = getFortune(isFlippedStatus, fortuneDown, fortuneUp);
        singleCardDiv.appendChild(fortuneString);
    }
}

function readingOrientation(isFlippedStatus, cardImg) {
    if(isFlippedStatus === 'upside-down') {
        cardImg.classList.add('flipped');
    }
    else if(isFlippedStatus === 'upside-up') {
        cardImg.classList.remove('flipped');
    }
}

// arrays can be handy for this:
const titles = ['Your Future', 'Your Present', 'Your Past'];

// function generateTitle(j, fortuneTitle) {
//     if(j === 0) {
//         fortuneTitle.textContent = 'Your Future';
//     }
//     else if(j === 1) {
//         fortuneTitle.textContent = 'Your Present';
//     }
//     else if(j === 2) {
//         fortuneTitle.textContent = 'Your Past';
//     }
// }

function getFortune(isFlippedStatus, fortuneDown, fortuneUp) {
    if(isFlippedStatus === 'upside-down') {
        return fortuneDown;
    }
    return fortuneUp;
}


export default renderHand;