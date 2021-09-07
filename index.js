  const chalk = require("chalk")
  const convert = require("color-convert")
  const readline = require("node:readline");

  let input1 = process.argv[2]
  let input2 = process.argv[3]

  // set completely random HSL-color to begin with (will stay that way if user doesn't enter data)

  let hue = Math.floor(Math.random()*361)
  const saturation = Math.floor(Math.random()*101)
  let brightness = Math.floor(Math.random()*101)




  function print(randomHex) {

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

   // adaptColor to possible input

   function adaptColor() {

    if(input1 === "red") {
      hue = 360
    } else if (input1 === "green") {
      hue = 120
    } else if (input1 === "blue")  {
      hue = 240
    } else if (input1) {
      console.log('First input should be "red", "green", or "blue"  -> Ignored!')
    }


    if(input2 === "dark") {
      brightness = 25
    } else if (input2 === "light") {
      brightness = 75
    } else if (input2) {
      console.log('Second input should be "light" or "dark"  --> Ignored!')
    }

    const randomHex = convert.hsl.hex(hue, saturation, brightness)   // convert to HEX and trigger printing
    print(randomHex)

   }




// check for the ask-input

  if(input1 === "ask") {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question(`Enter a color (red, green, or blue)\n`, askedColor => {  // adapt input1 and input2 according to input, then trigger adaptColor()
      rl.question('Dark or light?\n', askedBrightness => {
        input1 = askedColor
        input2 = askedBrightness
        rl.close()
        adaptColor()
       })
    })
  } else {
  adaptColor()
  }
