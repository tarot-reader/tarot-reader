// import info from '../data/data-manage.js';

const renderReading = document.getElementById('render-reading');
const middleCardFace = document.getElementById('middle-card-face');
const rightCardFace = document.getElementById('right-card-face');
const leftCardFace = document.getElementById('left-card-face');
const middleCardBack = document.getElementById('middle-card-back');
const rightCardBack = document.getElementById('right-card-back');
const leftCardBack = document.getElementById('left-card-back');

function showFaceCards() {
    middleCardFace.classList.remove('hidden');
    rightCardFace.classList.remove('hidden');
    leftCardFace.classList.remove('hidden');
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