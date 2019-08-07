function renderButton(card, index) {
    const button = document.createElement('button');
    button.value = card.name;
    button.id = 'button' + index;
    const backImage = document.createElement('img');
    backImage.src = '/assets/back.png';
    button.appendChild(backImage);
    const image = document.createElement('img');
    image.src = card.imgSrc;
    image.classList.add('hidden');
    button.appendChild(image);
    return button;
}

export default renderButton;