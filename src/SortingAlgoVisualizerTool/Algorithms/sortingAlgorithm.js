import { swap } from "../helperMethods";

//  ---------- Merge Sort ----------
//  Sorts the array using the merge sort algorithm and returns the animations array.
export const mergeSortAnimation = (array) => {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSorter(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
};

const mergeSorter = (mainArray, startIdx, endIdx, auxiliaryArray, animations) => {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSorter(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSorter(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  createMergeSortAnimation(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

const createMergeSortAnimation = (mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations) => {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    animations.push([i, j]);
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    animations.push([i, i]);
    animations.push([i, i]);
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    animations.push([j, j]);
    animations.push([j, j]);
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}

//  ---------- Bubble Sort ----------
//  Sorts the array using the bubble sort algorithm and returns the animations array.
export const bubbleSortAnimation = (array) => {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  bubbleSorter(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

// Bubble sort algorithm
const bubbleSorter = (mainArray, startIdx, endIdx, auxiliaryArray, animations) => {
  if (startIdx === endIdx) return;
  let swapped;

  do {
    swapped = false;
    for (let i = startIdx; i < endIdx; i++) {
      animations.push([i, i + 1]);
      if (auxiliaryArray[i] > auxiliaryArray[i + 1]) {
        animations.push([i, auxiliaryArray[i + 1]]);
        animations.push([i + 1, auxiliaryArray[i]]);
        swap(mainArray, i, i + 1);
        swap(auxiliaryArray, i, i + 1);
        swapped = true;
      }
      else {
        animations.push([i, auxiliaryArray[i]]);
        animations.push([i + 1, auxiliaryArray[i + 1]]);
      }
      animations.push([i, i + 1]);
    }
  } while (swapped);
}

//  ---------- Insertion Sort ----------
//  Sorts the array using the insertion sort algorithm and returns the animations array.
export const insertionSortAnimation = (array) => {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  insertionSorter(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

// Insertion sort algorithm
const insertionSorter = (mainArray, startIdx, endIdx, auxiliaryArray, animations) => {
  for (let i = startIdx + 1; i <= endIdx; i++) {
    let j = i;
    while (j > startIdx && auxiliaryArray[j] < auxiliaryArray[j - 1]) {
      animations.push([j, j - 1]);
      animations.push([j, j - 1]);
      animations.push([j, auxiliaryArray[j - 1]]);
      animations.push([j - 1, auxiliaryArray[j]]);
      swap(mainArray, j, j - 1);
      swap(auxiliaryArray, j, j - 1);
      j--;
    }
  }
}

//  ---------- Selection Sort ----------
//  Sorts the array using the selection sort algorithm and returns the animations array.
export const selectionSortAnimation = (array) => {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  selectionSorter(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

// Selection sort algorithm
const selectionSorter = (mainArray, startIdx, endIdx, auxiliaryArray, animations) => {
  let selectionArray;
  for (let i = startIdx; i < endIdx; i++) {
    let minIdx = i;
    selectionArray = [];
    for (let j = i + 1; j <= endIdx; j++) {
      selectionArray.push(j);
      if (auxiliaryArray[j] < auxiliaryArray[minIdx]) {
        minIdx = j;
      }
    }

    animations.push([i, selectionArray]);
    animations.push([i, selectionArray]);
    if (minIdx !== i) {
      animations.push(["swap", [i, auxiliaryArray[minIdx]], [minIdx, auxiliaryArray[i]]]);
      swap(mainArray, minIdx, i);
      swap(auxiliaryArray, minIdx, i);
    } else {
      animations.push([""]);
    }
  }
}