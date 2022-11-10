import './styles/main.css';
import {
    addEventsHandlers,
    adjustBodyForNav,
} from './js/functions';
import { setupThreeJS } from './js/Three';

console.log('Thanks for checking out my log.');

addEventsHandlers();
adjustBodyForNav();
setupThreeJS();
