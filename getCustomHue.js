import { desiredHue } from './index.js';

export let customHue;

// check values of 'desiredHue' against a list and set the customHue accordingly:

export default function getCustomHue() {
  switch (desiredHue) {
    case 'red':
      customHue = 360;
      break;
    case 'orange':
      customHue = 30;
      break;
    case 'yellow':
      customHue = 60;
      break;
    case 'olive':
      customHue = 90;
      break;
    case 'green':
      customHue = 120;
      break;
    case 'teal':
      customHue = 150;
      break;
    case 'cyan':
      customHue = 180;
      break;
    case 'blue':
      customHue = 210;
      break;
    case 'violet':
      customHue = 240;
      break;
    case 'purple':
      customHue = 270;
      break;
    case 'magenta':
      customHue = 300;
      break;
    case 'scarlet':
      customHue = 330;
      break;

    // extra cases -- (technically not hues)

    case 'white':
      customHue = 'white';
      break;
    case 'black':
      customHue = 'black';
      break;
    case 'grey':
      customHue = 'grey';
      break;

    default: // default - keep customHue undefined
  }
}
