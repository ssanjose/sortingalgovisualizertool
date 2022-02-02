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