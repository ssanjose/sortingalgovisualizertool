import { swap } from "../helperMethods";

//  ---------- Insertion Sort ----------
//  Sorts the array using the insertion sort algorithm and returns the animations array.
export const insertionSortAnimation = (array) => {
  const animations = [];
  if (array.length <= 1) return array;
  insertionSorter(array, 0, array.length - 1, animations);
  return animations;
}

// Insertion sort algorithm
const insertionSorter = (mainArray, startIdx, endIdx, animations) => {
  for (let i = startIdx + 1; i <= endIdx; i++) {
    let j = i;
    while (j > startIdx && mainArray[j] < mainArray[j - 1]) {
      animations.push([j, j - 1]);
      animations.push([j, j - 1]);
      animations.push([j, mainArray[j - 1]]);
      animations.push([j - 1, mainArray[j]]);
      swap(mainArray, j, j - 1);
      j--;
    }
  }
}