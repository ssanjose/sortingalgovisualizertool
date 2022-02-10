import { bubbleSortAnimation } from "../Algorithms/bubbleSort";
import { insertionSortAnimation } from "../Algorithms/insertionSort";
import { mergeSortAnimation } from "../Algorithms/mergeSort";
import { selectionSortAnimation } from "../Algorithms/selectionSort";
import { quickSortAnimation } from "../Algorithms/quickSort";
import { setColorChange, setHeightChange } from "../helperMethods";

//  Animation function to handle animations in the sorting algorithm visualization tool.
export const animationHandler = (array, algorithm, config, sorting, setSorting) => {
  let animations = [];
  setSorting(true);

  switch (algorithm) {
    case 'bubbleSort':
      bubbleSort(array, config, setSorting);
      break;
    case 'insertionSort':
      insertionSort(array, config, setSorting);
      break;
    case 'selectionSort':
      selectionSort(array, config, setSorting);
      break;
    case 'mergeSort':
      mergeSort(array, config, setSorting);
      break;
    case 'quickSort':
      quickSort(array, config, setSorting);
      break;
    default:
      break;
  }
  return animations;
}

//  Merge sort function to call the merge sort animation function and handle animation.
const mergeSort = (array, config, setSorting) => {
  const animations = mergeSortAnimation(array);
  const arrayBars = document.getElementsByClassName('array-bar');

  for (let i = 0; i < animations.length; i++) {
    let isColorChange = i % 3 !== 2;
    if (isColorChange) {
      let [barOneIdx, barTwoIdx] = animations[i];
      let color = i % 3 === 0 ? config.secondaryColor : config.primaryColor;

      setColorChange(arrayBars, [[barOneIdx, color], [barTwoIdx, color]], config.animationSpeed - 3, i);
    } else {
      let [barOneIdx, newHeight] = animations[i];

      setHeightChange(arrayBars, [[barOneIdx, newHeight]], config.animationSpeed - 3, i);
    }

    if (i === animations.length - 1) {
      // set timeout to toggle setSorting to opposite of sorting to know when the array is sorted.
      setTimeout(() => {
        setSorting(false);
      }, ((config.animationSpeed - 3) * i));
    }
  }
}

//  Bubble sort function to call the bubble sort animation function and handle animation.
const bubbleSort = (array, config, setSorting) => {
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

    if (i === animations.length - 1) {
      // set timeout to toggle setSorting to opposite of sorting to know when the array is sorted.
      setTimeout(() => {
        setSorting(false);
      }, ((config.animationSpeed - 3) * i));
    }
  }
}

//  Insertion sort function to call the insertion sort animation function and handle animation.
const insertionSort = (array, config, setSorting) => {
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

    if (i === animations.length - 1) {
      // set timeout to toggle setSorting to opposite of sorting to know when the array is sorted.
      setTimeout(() => {
        setSorting(false);
      }, ((config.animationSpeed - 3) * i));
    }
  }
}

//  Selection sort function to call the selection sort animation function and handle animation.
const selectionSort = (array, config, setSorting) => {
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
      if (animations[i][0] === "swap") {
        let [_, barOne, barTwo] = animations[i];
        setHeightChange(arrayBars, [barOne, barTwo], config.animationSpeed, i);
      }
    }

    if (i === animations.length - 1) {
      // set timeout to toggle setSorting to opposite of sorting to know when the array is sorted.
      setTimeout(() => {
        setSorting(false);
      }, ((config.animationSpeed - 3) * i));
    }
  }
}

//  Quick sort function to call the quick sort animation function and handle animation.
const quickSort = (array, config, setSorting) => {
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

    if (i === animations.length - 1) {
      // set timeout to toggle setSorting to opposite of sorting to know when the array is sorted.
      setTimeout(() => {
        setSorting(false);
      }, ((config.animationSpeed - 3) * i));
    }
  }
}
