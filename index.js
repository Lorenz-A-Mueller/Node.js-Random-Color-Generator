import convert from 'color-convert';
import readline from 'readline-sync';
import getCustomHue from './getCustomHue.js';
import getCustomLightness from './getCustomLightness.js';
import print from './print.js';

let input1 = process.argv[2];
let input2 = process.argv[3];

let desiredHue;
let desiredLightness;
let customHue;
let customLightness;
let color;
let boxDimensions = '31x9'; // default dimensions of the box

// get random hue, saturation and lightness values in order to construct a random HSL-color.
// restrict saturation and lightness to values between 30 and 70

const randomSaturation = 30 + Math.floor(Math.random() * 41);
const randomLightness = 30 + Math.floor(Math.random() * 41);
const randomHue = Math.floor(Math.random() * 361);

// check whether the user requests a custom box:
// #1) There could be three inputs (process.argv[4] is truthy)
// #2) The first input could start with a number (that way, it is possible to enter box-dimensions and a hue, but no lightness value)
// (#1 is included so an input like "node index.js a12x23 red light" will not mistake the first input for a hue)
// The inputs then have to be moved one element further in the array.

if (process.argv[4] || /^(\d)/.test(process.argv[2])) {
  input1 = process.argv[3];
  input2 = process.argv[4];

  // check whether the checkbox-input follows the right format. Should be W(W)xHH.
  // (here though, width and length can be arbitrarily big (will only give an error message later, in print.js)

  if (!/^(\d)+x(\d)+/.test(process.argv[2])) {
    console.log('Invalid box format. Should be W(W)xHH. --> Ignored!');
  } else {
    boxDimensions = process.argv[2];
  }
}

// If user enters "ask",  ask for a a custom hue value first, then for a lightness value

if (input1 === 'ask') {
  do {
    desiredHue = readline.question(`Please enter a color\n`).toLowerCase();
    customHue = getCustomHue(desiredHue);
    if (!customHue) {
      console.log('Color not found. Please choose another.');
    }
  } while (!customHue); // if no valid color, customHue will not have been set, asks again

  if (customHue !== 'white' && customHue !== 'black') {
    // (if the hue value was "white" or "black", don't ask for lightness)
    desiredLightness = readline.question(`Light or dark?\n`).toLowerCase();
    customLightness = getCustomLightness(desiredLightness);
  }
} else if (input1) {
  // if another input1 than ask, directly check for hue value
  desiredHue = input1;
  customHue = getCustomHue(desiredHue);
  if (!customHue) {
    console.log('Could not find requested hue. --> Ignored!');
  }

  if (input2) {
    // if also an input2 exists, test if it fits the lightness values
    desiredLightness = input2;
    customLightness = getCustomLightness(desiredLightness);
  }
}

// convert to HEX (with the color-convert module)

if (customHue === 'white') {
  color = convert.hsl.hex(randomHue, randomSaturation, 100); // white  given (lightness = 100)
} else if (customHue === 'black') {
  color = convert.hsl.hex(randomHue, randomSaturation, 0); // black given (lightness = 0) (white & black will ignore a set customLightness)
} else if (customHue === 'grey' && customLightness) {
  color = convert.hsl.hex(randomHue, 0, customLightness); // grey given with customLightness (saturation = 0)
} else if (customHue === 'grey') {
  color = convert.hsl.hex(randomHue, 0, randomLightness); // grey given without customLightness
} else if (customHue && customLightness) {
  color = convert.hsl.hex(customHue, randomSaturation, customLightness); // hue and lightness given
} else if (customLightness) {
  color = convert.hsl.hex(randomHue, randomSaturation, customLightness); // only lightness given (hue was not found)
} else if (customHue) {
  color = convert.hsl.hex(customHue, randomSaturation, randomLightness); // only hue given (not grey, white, or black ( have been 'cared for' above))
} else {
  color = convert.hsl.hex(randomHue, randomSaturation, randomLightness); // completely random
}

// print the box with the given hex-color and in the required dimensions
print(color, boxDimensions);
