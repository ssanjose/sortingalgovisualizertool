import { swap } from "../helperMethods";

//  ---------- Bubble Sort ----------
//  Sorts the array using the bubble sort algorithm and returns the animations array.
export const bubbleSortAnimation = (array) => {
  const animations = [];
  if (array.length <= 1) return array;
  bubbleSorter(array, 0, array.length - 1, animations);
  return animations;
}

// Bubble sort algorithm
const bubbleSorter = (mainArray, startIdx, endIdx, animations) => {
  if (startIdx === endIdx) return;
  let swapped;

  do {
    swapped = false;
    for (let i = startIdx; i < endIdx; i++) {
      animations.push([i, i + 1]);
      if (mainArray[i] > mainArray[i + 1]) {
        animations.push([i, mainArray[i + 1]]);
        animations.push([i + 1, mainArray[i]]);
        swap(mainArray, i, i + 1);
        swapped = true;
      }
      else {
        animations.push([i, mainArray[i]]);
        animations.push([i + 1, mainArray[i + 1]]);
      }
      animations.push([i, i + 1]);
    }
  } while (swapped);
}