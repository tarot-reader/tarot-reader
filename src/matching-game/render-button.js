function renderButton(card, index) {
    const button = document.createElement('button');
    button.value = card.name;
    button.id = 'button' + index;
    button.classList.add('card');
    const backImage = document.createElement('img');
    backImage.src = '/assets/back.png';
    backImage.alt = 'back' + index;
    backImage.classList.add('back');
    button.appendChild(backImage);
    const image = document.createElement('img');
    image.src = card.imgSrc;
    image.classList.add('hidden');
    image.classList.add('front');
    image.alt = 'image' + index;
    button.appendChild(image);
    return button;
}

export default renderButton;