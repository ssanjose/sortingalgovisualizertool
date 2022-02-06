import { swap } from "../helperMethods";

//  ---------- Selection Sort ----------
//  Sorts the array using the selection sort algorithm and returns the animations array.
export const selectionSortAnimation = (array) => {
  const animations = [];
  if (array.length <= 1) return array;
  selectionSorter(array, 0, array.length - 1, animations);
  return animations;
}

// Selection sort algorithm
const selectionSorter = (mainArray, startIdx, endIdx, animations) => {
  let selectionArray;
  for (let i = startIdx; i < endIdx; i++) {
    let minIdx = i;
    selectionArray = [];
    for (let j = i + 1; j <= endIdx; j++) {
      selectionArray.push(j);
      if (mainArray[j] < mainArray[minIdx]) {
        minIdx = j;
      }
    }

    animations.push([i, selectionArray]);
    animations.push([i, selectionArray]);
    if (minIdx !== i) {
      animations.push(["swap", [i, mainArray[minIdx]], [minIdx, mainArray[i]]]);
      swap(mainArray, minIdx, i);
    } else {
      animations.push([""]);
    }
  }
}
