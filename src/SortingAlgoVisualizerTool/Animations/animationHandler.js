import { bubbleSortAnimation } from "../Algorithms/bubbleSort";
import { mergeSortAnimation } from "../Algorithms/mergeSort";
import { insertionSortAnimation, quickSortAnimation, selectionSortAnimation } from "../Algorithms/sortingAlgorithm";
import { setColorChange, setHeightChange } from "../helperMethods";

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
    case 'quickSort':
      quickSort(array, config);
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
      let color = i % 3 === 0 ? config.secondaryColor : config.primaryColor;

      setColorChange(arrayBars, [[barOneIdx, color], [barTwoIdx, color]], config.animationSpeed, i);
    } else {
      let [barOneIdx, newHeight] = animations[i];

      setHeightChange(arrayBars, [[barOneIdx, newHeight]], config.animationSpeed, i);
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
      let color = i % 2 === 0 ? config.secondaryColor : config.primaryColor;

      setColorChange(arrayBars, [[barOneIdx, color], [barTwoIdx, color]], config.animationSpeed, i);
    } else if (i % 4 === 1) {
      let [barOneIdx, newHeight] = animations[i];

      setHeightChange(arrayBars, [[barOneIdx, newHeight]], config.animationSpeed, i);
    } else if (i % 4 === 2) {
      let [barTwoIdx, newHeight] = animations[i];

      setHeightChange(arrayBars, [[barTwoIdx, newHeight]], config.animationSpeed, i);
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
      let color = i % 2 === 0 ? config.secondaryColor : config.primaryColor;

      setColorChange(arrayBars, [[barOneIdx, color], [barTwoIdx, color]], config.animationSpeed, i);
    } else if (i % 4 === 2) {
      let [barOneIdx, newHeight] = animations[i];

      setHeightChange(arrayBars, [[barOneIdx, newHeight]], config.animationSpeed, i);
    } else if (i % 4 === 3) {
      let [barTwoIdx, newHeight] = animations[i];

      setHeightChange(arrayBars, [[barTwoIdx, newHeight]], config.animationSpeed, i);
    }
  }
}

//  Selection sort function to call the selection sort animation function and handle animation.
const selectionSort = (array, config) => {
  const animations = selectionSortAnimation(array);
  const arrayBars = document.getElementsByClassName('array-bar');

  for (let i = 0; i < animations.length; i++) {
    if (i % 3 === 0) {
      let [barBoundIdx, selectionArrayIdxs] = animations[i];

      setColorChange(arrayBars, [[barBoundIdx, config.boundColor]].concat(selectionArrayIdxs.map(idx => [idx, config.secondaryColor])), config.animationSpeed, i);
    } else if (i % 3 === 1) {
      let [barBoundIdx, selectionArrayIdxs] = animations[i];

      setColorChange(arrayBars, [[barBoundIdx, config.primaryColor]].concat(selectionArrayIdxs.map(idx => [idx, config.primaryColor])), config.animationSpeed, i);
    } else {
      if (animations[i][0] == "swap") {
        let [_, barOne, barTwo] = animations[i];
        setHeightChange(arrayBars, [barOne, barTwo], config.animationSpeed, i);
      }
    }
  }
}

//  Quick sort function to call the quick sort animation function and handle animation.
const quickSort = (array, config) => {
  const animations = quickSortAnimation(array);
  const arrayBars = document.getElementsByClassName('array-bar');
  console.log(array);

  for (let i = 0; i < animations.length; i++) {
    if (animations[i][0] === "compare") {
      let [_, barOneIdx, barTwoIdx] = animations[i];
      let color = config.secondaryColor;

      setColorChange(arrayBars, [[barOneIdx, color], [barTwoIdx, color]], config.animationSpeed, i);
    } else if (animations[i][0] === "primary") {
      let [_, barOneIdx, barTwoIdx] = animations[i];
      let color = config.primaryColor;

      setColorChange(arrayBars, [[barOneIdx, color], [barTwoIdx, color]], config.animationSpeed, i);
    } else if (animations[i][0] === "swap") {
      let [_, barOne, barTwo] = animations[i];
      setHeightChange(arrayBars, [barOne, barTwo], config.animationSpeed, i);
    }
  }


}
