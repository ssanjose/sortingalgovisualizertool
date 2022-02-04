//  Swaps two elements in an array
export const swap = (array, i, j) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

// Takes the both bar styles, color, index and config and sets a timeout to change the bar style.
export const setColorChange = (barOneStyle, barTwoStyle, color, index, config) => {
  setTimeout(() => {
    barOneStyle.backgroundColor = color;
    barTwoStyle.backgroundColor = color;
  }, index * config.animationSpeed);
}

// Takes a bar style, height, index and config and sets a timeout to change the bar height.
export const setHeightChange = (barStyle, height, index, config) => {
  setTimeout(() => {
    barStyle.height = `${height}px`;
  }, index * config.animationSpeed);
}

export const setSingleColorChange = (barStyle, color, index, animationSpeed) => {
  setTimeout(() => {
    barStyle.backgroundColor = color;
  }, index * animationSpeed);
}

export const setArrayColorChange = (arrayBars, selectionArrayIdxs, color, index, animationSpeed) => {
  setTimeout(() => {
    for (let i = 0; i < selectionArrayIdxs.length; i++) {
      arrayBars[selectionArrayIdxs[i]].style.backgroundColor = color;
    }
  }, index * animationSpeed);
}

// selectionArray has [[startIdx, color], ..., [endIdx, color]]
export const setColorChangeV2 = (arrayBars, selectionArray, animationSpeed) => {
  setTimeout(() => {
    for (let i = 0; i < selectionArray.length; i++) {
      arrayBars[selectionArray[i][0]].style.backgroundColor = selectionArray[i][1];
    }
  }, animationSpeed);
}

export const setHeightChangeV2 = (arrayBars, selectionArray, animationSpeed) => {
  setTimeout(() => {
    for (let i = 0; i < selectionArray.length; i++) {
      arrayBars[selectionArray[i][0]].style.height = `${selectionArray[i][1]}px`;
    }
  }, animationSpeed);
}
