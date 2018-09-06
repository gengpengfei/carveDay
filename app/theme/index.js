import red from './red.js';
import black from './black.js';
var theme;
switch (global.THEME) {
    case 'red':
        theme = black;
        break;
    case 'black':
        theme = red;
        break;
    default:
        theme = red;
        break;
}

export default theme;