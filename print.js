import chalk from 'chalk';

// function accepts a color in HEX-format and dimensions in the form WxH

export default function print(hexColor, widthXHeight) {
  let boxWidth;
  let boxHeight;

  // test whether input begins with 3(or more), 2 or just 1 number -> set boxWidth and boxHeight accordingly

  if (/^\d\d\d/.test(widthXHeight)) {
    console.log('Choose a maximum width of 99.');
    return;
  } else if (/^\d\d/.test(widthXHeight)) {
    boxWidth = Number.parseInt(widthXHeight.slice(0, 2), 10); // first two numbers
    boxHeight = Number.parseInt(widthXHeight.slice(3), 10); // from 4th number (could be one or more digits)
  } else {
    boxWidth = Number.parseInt(widthXHeight.slice(0, 1), 10); // first number
    boxHeight = Number.parseInt(widthXHeight.slice(2), 10); // from 3rd number (could be one or more digits)
  }

  let hashAmount; // number of # to the left and right in the three middle rows.
  let rightShiftFactor = 0; // if boxWidth is even, the color HEX number in the middle has to be shifted one unit to the right.
  let downShiftFactor = 0; // if boxHeight is even, there will be one fullRow less at the bottom then at the top. (I called that 'down shift')

  // set "shift factors" if values are even

  if (!(boxWidth % 2)) rightShiftFactor = 1;
  if (!(boxHeight % 2)) downShiftFactor = 1;

  // Check for boxWidth. Determines the amount of hashes in the three middle rows.

  if (boxWidth > 12) {
    hashAmount = 3;
  } else if (boxWidth > 10) {
    hashAmount = 2;
  } else if (boxWidth > 8) {
    hashAmount = 1;
  } else {
    console.log('Width to small. Choose a value of 9 or higher.');
    return;
  }

  // check for extreme boxHeights

  if (boxHeight < 5) {
    console.log('Height to small. Choose a value of 5 or higher.');
    return;
  } else if (boxHeight > 99) {
    console.log('Choose a maximum height of 99.');
    return;
  }

  // define 3 types of rows
  // If ((boxWidth - (hashAmount * 2 + 7)) / 2) does not equal an integer (true for even boxWidth), Math.ceil will round up. (1 extra ' ' on the left)
  // Math.ceil(boxWidth - (hashAmount * 2 + 7)) / 2 - rightShiftFactor) will then equal one less than the above rounded expression.

  const fullRow = '#'.repeat(boxWidth) + '\n';
  const centerRow =
    '#'.repeat(hashAmount) +
    ' '.repeat(Math.ceil((boxWidth - (hashAmount * 2 + 7)) / 2)) +
    '#' +
    hexColor +
    ' '.repeat(
      Math.ceil((boxWidth - (hashAmount * 2 + 7)) / 2 - rightShiftFactor),
    ) +
    '#'.repeat(hashAmount) +
    '\n';

  const holeRow =
    '#'.repeat(hashAmount) +
    ' '.repeat(boxWidth - hashAmount * 2) +
    '#'.repeat(hashAmount) +
    '\n';

  // print
  // use the chalk module for coloring the output
  // If ((boxHeight - 3) / 2) does not equal an integer (true for even boxHeight), Math.ceil will round up (1 extra row at the top).
  // Math.ceil((boxHeight - 3) / 2 - downShiftFactor) will then equal one less than the above rounded expression.

  console.log(
    chalk.hex(hexColor)(
      `${fullRow.repeat(
        Math.ceil((boxHeight - 3) / 2),
      )}${holeRow}${centerRow}${holeRow}${fullRow.repeat(
        Math.ceil((boxHeight - 3) / 2 - downShiftFactor),
      )}`,
    ),
  );
}
