import './styles/main.css';
import {
    addEventsHandlers,
    adjustBodyForNav,
} from './js/functions';
import { setupThreeJS } from './js/three';

setupThreeJS();

addEventsHandlers();
adjustBodyForNav();

console.log('Thanks for checking out my log.');
window.addEventListener('resize',setupThreeJS);
