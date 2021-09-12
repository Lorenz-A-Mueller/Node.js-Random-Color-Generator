import { desiredLightness } from './index.js';

// check input value of 'desiredLightness' against 'light' or 'dark' and set customLightness accordingly

export let customLightness;

export default function getCustomLightness() {
  if (desiredLightness === 'dark') {
    customLightness = 30;
  } else if (desiredLightness === 'light') {
    customLightness = 70;
  } else {
    console.log('Input should be "light" or "dark"  --> Ignored!'); // customLightness not set
  }
}
