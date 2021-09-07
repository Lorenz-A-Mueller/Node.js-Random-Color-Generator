
  const digitArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

  function getRandomIndex() {
    const randomIndex = Math.floor(Math.random() * 17);
    return randomIndex;
  }

    const randomHexArr = [];
    for (let i = 0; i < 6; i++) {
      randomHexArr.push(digitArray[getRandomIndex()]);
    }
    const randomHex = '#' + randomHexArr.join('');
    console.log(randomHex)
