// check input value of 'desiredLightness' against 'light' or 'dark' and set lightnessPercentage accordingly

export default function getCustomLightness(inputLightness) {
  let lightnessPercentage;
  if (inputLightness === 'dark') {
    lightnessPercentage = 30;
  } else if (inputLightness === 'light') {
    lightnessPercentage = 70;
  } else {
    console.log('Input should be "light" or "dark"  --> Ignored!'); // customLightness not set
  }
  return lightnessPercentage;
}
