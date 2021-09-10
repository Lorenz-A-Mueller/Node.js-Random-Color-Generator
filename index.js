const chalk = require('chalk');
const convert = require('color-convert');
const readline = require('readline-sync');

let input1 = process.argv[2];
let input2 = process.argv[3];

// get hue, saturation and lightness in order to construct a random HSL-color (will stay that way if user doesn't enter data)
// restrict saturation and lightness to values between 30 and 70

let hue = Math.floor(Math.random() * 361);
let saturation = 30 + Math.floor(Math.random() * 41);
let lightness = 30 + Math.floor(Math.random() * 41);

// function askHue. Will be called if the user inputs "ask". Ask for a color and resets hue values according to the input.

function askHue() {
  let repeatQuestion = false;
  input1 = readline.question(`Please enter a color\n`).toLowerCase();

  switch (input1) {
    case 'red':
      hue = 0;
      break;
    case 'orange':
      hue = 30;
      break;
    case 'yellow':
      hue = 60;
      break;
    case 'olive':
      hue = 90;
      break;
    case 'green':
      hue = 120;
      break;
    case 'teal':
      hue = 150;
      break;
    case 'cyan':
      hue = 180;
      break;
    case 'blue':
      hue = 210;
      break;
    case 'violet':
      hue = 240;
      break;
    case 'purple':
      hue = 270;
      break;
    case 'magenta':
      hue = 300;
      break;
    case 'scarlet':
      hue = 330;
      break;

    // extra cases:

    case 'white':
      lightness = 100;
      break;
    case 'black':
      lightness = 0;
      break;
    case 'gray':
      saturation = 0;
      break;

    // if input is not a defined color, call the function recursively (until user input is valid)

    default:
      console.log('Color not found. Please try another.');
      repeatQuestion = true;
  }
  if (repeatQuestion) askHue();
}

// check if "ask" was put in by the user (if so, call askHue)

if (input1 === 'ask') askHue();

// if there was a first input and the color was neither white nor black
// ask for light/dark  [light -> 70; dark -> 30 lightness]

if (input1 && lightness !== 100 && lightness !== 0) {
  input2 = readline.question(`Light or dark?\n`).toLowerCase();

  if (input2 === 'dark') {
    lightness = 30;
  } else if (input2 === 'light') {
    lightness = 70;
  } else if (input2) {
    console.log('Second input should be "light" or "dark"  --> Ignored!');
  }
}

// convert to HEX (with the color-convert module)

const randomColor = convert.hsl.hex(hue, saturation, lightness);

// print the color

const fullRow = '#'.repeat(31) + '\n';
const holeRow = '#'.repeat(3) + ' '.repeat(25) + '#'.repeat(3) + '\n';
const centerRow =
  '#'.repeat(3) +
  ' '.repeat(10) +
  randomColor +
  ' '.repeat(9) +
  '#'.repeat(3) +
  '\n';

console.log(
  chalk.hex(randomColor)(
    `${fullRow.repeat(3)}${holeRow}${centerRow}${holeRow}${fullRow.repeat(3)}`,
  ),
);
