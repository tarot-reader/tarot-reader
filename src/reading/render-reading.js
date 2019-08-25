import info from '../data/data-manage.js';
info.getCards();
info.getHandsArray();

const renderReading = document.getElementById('render-reading');
const resetReading = document.getElementById('reset-reading');
const middleCardFace = document.getElementById('middle-card-face');
const rightCardFace = document.getElementById('right-card-face');
const leftCardFace = document.getElementById('left-card-face');
const middleCardBack = document.getElementById('middle-card-back');
const rightCardBack = document.getElementById('right-card-back');
const leftCardBack = document.getElementById('left-card-back');
const pastText = document.getElementById('past');
const presentText = document.getElementById('present');
const futureText = document.getElementById('future');
const readingVisible = document.getElementById('reading-text');

// try and avoid data types in variable names
const faceDownCards = [rightCardBack, middleCardBack, leftCardBack];
const faceUpCards = [rightCardFace, middleCardFace, leftCardFace];
const timeText = [futureText, presentText, pastText];

function showFaceCards() {
    const threeCardArray = info.randomCards(3);
    for(let i = 0; i < threeCardArray.length; i++) {
        const cardImageSrc = threeCardArray[i].imgSrc;
        const cardDisplay = threeCardArray[i].displayDirection;
        const cardObject = threeCardArray[i];
        const cardOnPage = faceUpCards[i];
        const textDiv = timeText[i];
        cardOnPage.src = cardImageSrc;
 
        const reverseRead = cardObject.readingReversed;
        const regularRead = cardObject.readingText;
        if(cardDisplay === 'upside-down') {
            cardOnPage.classList.add('flipped');
            textDiv.textContent = reverseRead;
            readingVisible.classList.remove('hidden');
        } else {
            cardOnPage.classList.remove('flipped');
            textDiv.textContent = regularRead;
            readingVisible.classList.remove('hidden');
        }
        cardOnPage.src = cardImageSrc;
    }
}

function addClassToAll(elements, className) {
    for(let i = 0; i < elements.length; i++) {
        let cardBack = elements[i];
        cardBack.classList.add(className);
    }
}

function removeClassFromAll(elements, className) {
    for(let i = 0; i < elements.length; i++) {
        let cardBack = elements[i];
        cardBack.classList.remove(className);
    }
}

function hideBackCards() {
    addClassToAll(faceDownCards, 'hidden');
}
   
function showBackCards() {
    removeClassFromAll(faceDownCards, 'hidden');
}

function hideFaceCards() {
    addClassToAll(faceUpCards, 'hidden');
}

function unHideFaceCards() {
    removeClassFromAll(faceUpCards, 'hidden');
}

renderReading.addEventListener('click', () => {
    showFaceCards();
    hideBackCards();
    unHideFaceCards();
    resetReading.classList.remove('hidden');
    renderReading.classList.add('hidden');
    info.getHandIntoNewArray();
});

resetReading.addEventListener('click', () => {
    showBackCards();
    hideFaceCards();
    resetReading.classList.add('hidden');
    readingVisible.classList.add('hidden');
    renderReading.classList.remove('hidden');
});
