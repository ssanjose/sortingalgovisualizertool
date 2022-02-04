import { bubbleSortAnimation, insertionSortAnimation, mergeSortAnimation, selectionSortAnimation } from "../Algorithms/sortingAlgorithm";
import { setArrayColorChange, setColorChange, setHeightChange, setSingleColorChange } from "../helperMethods";

//  Animation function to handle animations in the sorting algorithm visualization tool.
export const animationHandler = (array, algorithm, config) => {
  let animations = [];
  switch (algorithm) {
    case 'bubbleSort':
      bubbleSort(array, config);
      break;
    case 'insertionSort':
      insertionSort(array, config);
      break;
    case 'selectionSort':
      selectionSort(array, config);
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
    if (i % 4 === 0 || i % 4 === 3) {
      let [barOneIdx, barTwoIdx] = animations[i];
      let barOneStyle = arrayBars[barOneIdx].style;
      let barTwoStyle = arrayBars[barTwoIdx].style;
      let color = i % 2 === 0 ? config.secondaryColor : config.primaryColor;

      setColorChange(barOneStyle, barTwoStyle, color, i, config);
    } else if (i % 4 === 1) {
      let [barOneIdx, newHeight] = animations[i];
      let barOneStyle = arrayBars[barOneIdx].style;

      setHeightChange(barOneStyle, newHeight, i, config);
    } else if (i % 4 === 2) {
      let [barTwoIdx, newHeight] = animations[i];
      let barTwoStyle = arrayBars[barTwoIdx].style;

      setHeightChange(barTwoStyle, newHeight, i, config);
    }
  }
}

//  Insertion sort function to call the insertion sort animation function and handle animation.
const insertionSort = (array, config) => {
  const animations = insertionSortAnimation(array);
  const arrayBars = document.getElementsByClassName('array-bar');

  for (let i = 0; i < animations.length; i++) {
    if (i % 4 === 0 || i % 4 === 1) {
      let [barOneIdx, barTwoIdx] = animations[i];
      let barOneStyle = arrayBars[barOneIdx].style;
      let barTwoStyle = arrayBars[barTwoIdx].style;
      let color = i % 2 === 0 ? config.secondaryColor : config.primaryColor;

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

//  Selection sort function to call the selection sort animation function and handle animation.
const selectionSort = (array, config) => {
  const animations = selectionSortAnimation(array);
  const arrayBars = document.getElementsByClassName('array-bar');

  for (let i = 0; i < animations.length; i++) {
    // if (i % 4 === 0 || i % 4 === 3) {
    //   let [barOneIdx, barTwoIdx] = animations[i];
    //   let barOneStyle = arrayBars[barOneIdx].style;
    //   let barTwoStyle = arrayBars[barTwoIdx].style;
    //   let color = i % 2 === 0 ? config.secondaryColor : config.primaryColor;

    //   setColorChange(barOneStyle, barTwoStyle, color, i, config);
    // } else if (i % 4 === 1) {
    //   let [barOneIdx, newHeight] = animations[i];
    //   let barOneStyle = arrayBars[barOneIdx].style;

    //   setHeightChange(barOneStyle, newHeight, i, config);
    // } else if (i % 4 === 2) {
    //   let [barTwoIdx, newHeight] = animations[i];
    //   let barTwoStyle = arrayBars[barTwoIdx].style;

    //   setHeightChange(barTwoStyle, newHeight, i, config);
    // }
    if (i % 3 === 0) {
      let [barBoundIdx, selectionArrayIdxs] = animations[i];

      let barBoundStyle = arrayBars[barBoundIdx].style;
      setSingleColorChange(barBoundStyle, config.boundColor, i, config.animationSpeed);
      setArrayColorChange(arrayBars, selectionArrayIdxs, config.secondaryColor, i, config.animationSpeed);
    } else if (i % 3 === 1) {
      let [barBoundIdx, selectionArrayIdxs] = animations[i];

      let barBoundStyle = arrayBars[barBoundIdx].style;
      setSingleColorChange(barBoundStyle, config.primaryColor, i, config.animationSpeed);
      setArrayColorChange(arrayBars, selectionArrayIdxs, config.primaryColor, i, config.animationSpeed);
    } else {
      if (animations[i][0] == "swap") {
        let [_, barOne, barTwo] = animations[i];
        let barOneStyle = arrayBars[barOne[0]].style;
        let barTwoStyle = arrayBars[barTwo[0]].style;

        setHeightChange(barOneStyle, barOne[1], i, config);
        setHeightChange(barTwoStyle, barTwo[1], i, config);
      }
    }
  }
}