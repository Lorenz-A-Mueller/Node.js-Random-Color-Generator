// check the input values against a list and set hueDegrees accordingly:

export default function getCustomHue(inputHue) {
  let hueDegrees;
  switch (inputHue) {
    case 'red':
      hueDegrees = 360;
      break;
    case 'orange':
      hueDegrees = 30;
      break;
    case 'yellow':
      hueDegrees = 60;
      break;
    case 'olive':
      hueDegrees = 90;
      break;
    case 'green':
      hueDegrees = 120;
      break;
    case 'teal':
      hueDegrees = 150;
      break;
    case 'cyan':
      hueDegrees = 180;
      break;
    case 'blue':
      hueDegrees = 210;
      break;
    case 'violet':
      hueDegrees = 240;
      break;
    case 'purple':
      hueDegrees = 270;
      break;
    case 'magenta':
      hueDegrees = 300;
      break;
    case 'scarlet':
      hueDegrees = 330;
      break;

    // extra cases -- (technically not hues)

    case 'white':
      hueDegrees = 'white';
      break;
    case 'black':
      hueDegrees = 'black';
      break;
    case 'grey':
      hueDegrees = 'grey';
      break;

    default: // default - keep customHue undefined
  }
  return hueDegrees;
}
