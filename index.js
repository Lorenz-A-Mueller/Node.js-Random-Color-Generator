  const chalk = require("chalk")
  const convert = require("color-convert")
  const readline = require("readline");



   // input

   let input1 = process.argv[2]
   let input2 = process.argv[3]


  // set completely random color

   let hue = Math.floor(Math.random()*361)
   const saturation = Math.floor(Math.random()*101)
   let brightness = Math.floor(Math.random()*101)
  // adaptColor to possible input




   function adaptColorAndPrint() {


      // hue input (set hue to a fixed value)
      if(input1 === "red") {
      hue = 360
    } else if (input1 === "green") {
      hue = 120
    } else if (input1 === "blue")  {
      hue = 240
    } else if (input1) {
      console.log('first input must be "red", "green", or "blue"')
    }

  // brightness input (set brightness to a fixed value)

  if (input2) {

    if(input2 === "dark") {
      brightness = 25
    } else if (input2 === "light") {
      brightness = 75
    } else {
      console.log('second entry must be "light" or "dark"')
    }
 }

    // convert to HEX
const randomHex = convert.hsl.hex(hue, saturation, brightness)


    console.log(chalk.hex(randomHex)(`
      ###############################
      ###############################
      ###                         ###
      ###         #${randomHex}         ###
      ###                         ###
      ###############################
      ###############################
      ###############################`))


}


if(input1 === "ask") {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question(`Enter a color (red, green, or blue)\n`, askedColor => {
    rl.question('Dark or light?\n', askedBrightness => {
      input1 = askedColor
      input2 = askedBrightness
      rl.close()
      adaptColorAndPrint()
    })
  })
} else {
  adaptColorAndPrint()
}
