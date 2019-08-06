import info from '../data/data-manage.js';

const renderReading = document.getElementById('render-reading');
const middleCardFace = document.getElementById('middle-card-face');
const rightCardFace = document.getElementById('right-card-face');
const leftCardFace = document.getElementById('left-card-face');
const middleCardBack = document.getElementById('middle-card-back');
const rightCardBack = document.getElementById('right-card-back');
const leftCardBack = document.getElementById('left-card-back');

const threeCardArray = info.randomCards(3);


function showFaceCards() {

    const image1 = threeCardArray[0].imgSrc;
    const image2 = threeCardArray[1].imgSrc;
    const image3 = threeCardArray[2].imgSrc;
    
    console.log(image1, image2, image3);
    middleCardFace.src = image1;
    rightCardFace.src = image2;
    leftCardFace.src = image3;
    
}

function hideBackCards() {
    middleCardBack.classList.add('hidden');
    rightCardBack.classList.add('hidden');
    leftCardBack.classList.add('hidden');
}

renderReading.addEventListener('click', event => {
    event.preventDefault();
    showFaceCards();
    hideBackCards();

});