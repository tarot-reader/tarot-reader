import info from '../data/data-manage.js';
info.getCards();

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

const faceDownArray = [rightCardBack, middleCardBack, leftCardBack];
const faceUpArray = [rightCardFace, middleCardFace, leftCardFace];
const textArray = [futureText, presentText, pastText];

function showFaceCards() {
    const threeCardArray = info.randomCards(3);
    for(let i = 0; i < threeCardArray.length; i++) {
        
        const cardImageSrc = threeCardArray[i].imgSrc;
        const cardDisplay = threeCardArray[i].displayDirection;
        const cardObject = threeCardArray[i];
        
        const cardOnPage = faceUpArray[i];
        const textDiv = textArray[i];

        
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

        console.log(textDiv.textContent);
        cardOnPage.src = cardImageSrc;


    }

}

function hideBackCards() {
    for(let i = 0; i < faceDownArray.length; i++) {
        let cardBack = faceDownArray[i];
        cardBack.classList.add('hidden');
    }

}


   
function showBackCards() {
    for(let i = 0; i < faceDownArray.length; i++) {
        let cardBack = faceDownArray[i];
        cardBack.classList.remove('hidden');
    }
}

function hideFaceCards() {
    for(let i = 0; i < faceUpArray.length; i++) {
        let cardFace = faceUpArray[i];
        cardFace.classList.add('hidden');
    }
}

function unHideFaceCards() {
    for(let i = 0; i < faceUpArray.length; i++) {
        let cardFace = faceUpArray[i];
        cardFace.classList.remove('hidden');
    }
}

renderReading.addEventListener('click', () => {
    
    showFaceCards();
    hideBackCards();
    unHideFaceCards();
    resetReading.classList.remove('hidden');
    renderReading.classList.add('hidden');
});

resetReading.addEventListener('click', () => {
    
    showBackCards();
    hideFaceCards();
    resetReading.classList.add('hidden');
    readingVisible.classList.add('hidden');
    renderReading.classList.remove('hidden');

});
