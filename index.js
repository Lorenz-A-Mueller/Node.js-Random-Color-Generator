  const chalk = require("chalk")
  const convert = require("color-convert")

   // input

   const input1 = process.argv[2]
   const input2 = process.argv[3]


  //set completely random color

   let hue = Math.floor(Math.random()*361)
   let saturation = Math.floor(Math.random()*101)
   let brightness = Math.floor(Math.random()*101)

    // hue input

    if (input1) {

      if(input1 === "red") {
        hue = 360
      } else if (input1 === "green") {
        hue = 120
      } else if (input1 === "blue")  {
        hue = 240
      } else {
        console.log('first input must be \"red\", \"green\", or \"blue\"')
      }
    }
    //brightness input

    if (input2) {

      if(input2 === "dark") {
        brightness = 25
      } else if (input2 === "light") {
        brightness = 75
      } else {
        console.log('second entry must be \"light\" or \"dark\"')
      }
    }

    const randomHSL = `(${hue}, ${saturation}% ${brightness}%)`
    console.log(randomHSL)

    // convert to HEX

    let randomHex = convert.hsl.hex(hue, saturation, brightness)
    console.log(randomHex)


    // no input



    console.log(chalk.hex(randomHex)(`
      ###############################
      ###############################
      ###                         ###
      ###         #${randomHex}         ###
      ###                         ###
      ###############################
      ###############################
      ###############################`))
