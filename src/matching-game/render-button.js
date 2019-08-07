function renderButton(card, index) {
    const button = document.createElement('button');
    button.value = card.name;
    button.id = 'button' + index;
    const image = document.createElement('img');
    image.src = card.imgSrc;
    button.appendChild(image);
    return button;
}

export default renderButton;