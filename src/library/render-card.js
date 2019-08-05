function renderCard(card) {
    const div = document.createElement('div');
    div.classList.add('card');

    const img = document.createElement('img');
    img.src = card.imgSrc;
    img.alt = card.altId;
    div.appendChild(img);

    const p = document.createElement('p');
    p.textContent = card.description;
    div.appendChild(p);

    return div;
}

export default renderCard;