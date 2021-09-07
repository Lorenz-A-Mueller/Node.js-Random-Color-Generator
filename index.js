const chalk = require('chalk');
const convert = require('color-convert');
const readline = require('readline-sync');

let input1 = process.argv[2];
let input2 = process.argv[3];

// set completely random HSL-color to begin with (will stay that way if user doesn't enter data)

let hue = Math.floor(Math.random() * 361);
const saturation = Math.floor(Math.random() * 101);
let brightness = Math.floor(Math.random() * 101);

function print(randomHex) {
  console.log(
    chalk.hex(randomHex)(`
      ###############################
      ###############################
      ###                         ###
      ###         #${randomHex}         ###
      ###                         ###
      ###############################
      ###############################
      ###############################`),
  );
}

// adaptColor to possible input

function adaptColor() {
  if (input1 === 'red') {
    hue = 360;
  } else if (input1 === 'green') {
    hue = 120;
  } else if (input1 === 'blue') {
    hue = 240;
  } else if (input1) {
    console.log('First input should be "red", "green", or "blue"  -> Ignored!');
  }

  if (input2 === 'dark') {
    brightness = 25;
  } else if (input2 === 'light') {
    brightness = 75;
  } else if (input2) {
    console.log('Second input should be "light" or "dark"  --> Ignored!');
  }

  const randomHex = convert.hsl.hex(hue, saturation, brightness); // convert to HEX and trigger printing
  print(randomHex);
}

// check for the ask-input

if (input1 === 'ask') {
  input1 = readline.question(`Enter a color (red, green, or blue)\n`);
  input2 = readline.question(`Bright or dark?\n`);

  adaptColor();
} else {
  adaptColor();
}
