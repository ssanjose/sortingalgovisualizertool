//  Swaps two elements in an array
export const swap = (array, i, j) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

// selectionArray has [[startIdx, color], ..., [endIdx, color]]
export const setColorChange = (arrayBars, selectionArray, animationSpeed, i) => {
  setTimeout(() => {
    for (let i = 0; i < selectionArray.length; i++) {
      arrayBars[selectionArray[i][0]].style.backgroundColor = selectionArray[i][1];
    }
  }, i * animationSpeed);
}

export const setHeightChange = (arrayBars, selectionArray, animationSpeed, i) => {
  setTimeout(() => {
    for (let i = 0; i < selectionArray.length; i++) {
      arrayBars[selectionArray[i][0]].style.height = `${selectionArray[i][1]}px`;
    }
  }, i * animationSpeed);
}
