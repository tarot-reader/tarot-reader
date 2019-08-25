import info from '../data/data-manage.js';
import renderHands from './render-hands.js';

const placement = document.getElementById('placement');

const megaHandArray = info.get('hands-array');

const totalCreatedHTML = renderHands(megaHandArray);
placement.appendChild(totalCreatedHTML);