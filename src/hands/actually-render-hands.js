import info from '../data/data-manage.js';
import renderHand from './render-hands.js';

const placement = document.getElementById('placement');

const megaHandArray = info.get('hands-array');

const totalCreatedHTML = renderHand(megaHandArray);
placement.appendChild(totalCreatedHTML);