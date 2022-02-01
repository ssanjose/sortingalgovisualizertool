import { bubbleSortAnimation, mergeSortAnimation } from "../Algorithms/sortingAlgorithm";

//  Animation function to handle animations in the sorting algorithm visualization tool.
export const animationHandler = (array, algorithm, config) => {
  let animations = [];
  switch (algorithm) {
    case 'bubbleSort':
      bubbleSort(array, config);
      break;
    case 'insertionSort':
      // insertionSort(array, animations);
      break;
    case 'selectionSort':
      // selectionSort(array, animations);
      break;
    case 'mergeSort':
      mergeSort(array, config);
      break;
    default:
      break;
  }
  return animations;
}

//  Merge sort function to call the merge sort animation function and handle animation.
const mergeSort = (array, config) => {
  const animations = mergeSortAnimation(array);
  const arrayBars = document.getElementsByClassName('array-bar');

  for (let i = 0; i < animations.length; i++) {
    let isColorChange = i % 3 !== 2;
    if (isColorChange) {
      let [barOneIdx, barTwoIdx] = animations[i];
      let barOneStyle = arrayBars[barOneIdx].style;
      let barTwoStyle = arrayBars[barTwoIdx].style;
      let color = i % 3 === 0 ? config.secondaryColor : config.primaryColor;

      setColorChange(barOneStyle, barTwoStyle, color, i, config);
    } else {
      let [barOneIdx, newHeight] = animations[i];
      let barOneStyle = arrayBars[barOneIdx].style;

      setHeightChange(barOneStyle, newHeight, i, config);
    }
  }
}

//  Bubble sort function to call the bubble sort animation function and handle animation.
const bubbleSort = (array, config) => {
  const animations = bubbleSortAnimation(array);
  const arrayBars = document.getElementsByClassName('array-bar');

  for (let i = 0; i < animations.length; i++) {
    if (i % 4 === 0 || i % 4 === 1) {
      let [barOneIdx, barTwoIdx] = animations[i];
      let barOneStyle = arrayBars[barOneIdx].style;
      let barTwoStyle = arrayBars[barTwoIdx].style;
      let color = i % 2 !== 1 ? config.secondaryColor : config.primaryColor;

      setColorChange(barOneStyle, barTwoStyle, color, i, config);
    } else if (i % 4 === 2) {
      let [barOneIdx, newHeight] = animations[i];
      let barOneStyle = arrayBars[barOneIdx].style;

      setHeightChange(barOneStyle, newHeight, i, config);
    } else if (i % 4 === 3) {
      let [barTwoIdx, newHeight] = animations[i];
      let barTwoStyle = arrayBars[barTwoIdx].style;

      setHeightChange(barTwoStyle, newHeight, i, config);
    }
  }

}

// Takes the both bar styles, color, index and config and sets a timeout to change the bar style.
const setColorChange = (barOneStyle, barTwoStyle, color, index, config) => {
  setTimeout(() => {
    barOneStyle.backgroundColor = color;
    barTwoStyle.backgroundColor = color;
  }, index * config.animationSpeed);
}

// Takes a bar style, height, index and config and sets a timeout to change the bar height.
const setHeightChange = (barStyle, height, index, config) => {
  setTimeout(() => {
    barStyle.height = `${height}px`;
  }, index * config.animationSpeed);
}