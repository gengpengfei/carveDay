import red from './redTheme';
import blue from './blueTheme';
var theme = {};
switch (global.THEME) {
    case 'red':
        theme = red;
        break;
    case 'blue':
        theme = blue;
        break;
    default:
        theme = red;
        break;
}
export default theme;