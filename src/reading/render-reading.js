import info from '../data/data-manage.js';

const renderReading = document.getElementById('render-reading');
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
        const isFlipped = info.randomWholeNum(2);
        const cardImageSrc = threeCardArray[i].imgSrc;
        const cardWholeObject = threeCardArray[i];
        const cardOnPage = faceUpArray[i];
        const textDiv = textArray[i];
        
        cardOnPage.src = cardImageSrc;
        if(isFlipped === 1) {
            cardOnPage.classList.add('flipped');
            textDiv.textContent = cardWholeObject.readingReversed;
            readingVisible.classList.remove('hidden');

        } else {
            cardOnPage.classList.remove('flipped');
            textDiv.textContent = cardWholeObject.readingText;
            readingVisible.classList.remove('hidden');
        }
    }

}

function hideBackCards() {
    for(let i = 0; i < faceDownArray.length; i++) {
        let cardBack = faceDownArray[i];
        cardBack.classList.add('hidden');
    }

}

renderReading.addEventListener('click', event => {
    event.preventDefault();
    showFaceCards();
    hideBackCards();
    

});