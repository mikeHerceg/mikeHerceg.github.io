import './styles/main.css';
import {
    addEventsHandlers,
    adjustBodyForNav,
} from './js/functions';
import { setupThreeJS } from './js/three';

console.log('Thanks for checking out my log.');

addEventsHandlers();
adjustBodyForNav();
setupThreeJS();
window.addEventListener('resize',setupThreeJS);
