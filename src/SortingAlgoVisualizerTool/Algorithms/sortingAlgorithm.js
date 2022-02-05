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



//  ---------- Quick Sort ----------
//  Sorts the array using the qiuck sort algorithm and returns the animations array.
export const quickSortAnimation = (array) => {
  const animations = [];
  if (array.length <= 1) return array;
  quickSorter(array, 0, array.length - 1, animations);
  return animations;
}

// Quick sort algorithm
const quickSorter = (mainArray, startIdx, endIdx, animations) => {
  if (startIdx < endIdx) {
    let pivotIdx = partition(mainArray, startIdx, endIdx, animations);
    quickSorter(mainArray, startIdx, pivotIdx - 1, animations);
    quickSorter(mainArray, pivotIdx + 1, endIdx, animations);
  }
}

const partition = (mainArray, startIdx, endIdx, animations) => {

  let pivotIdx = medianOfThree(mainArray, startIdx, endIdx);
  let pivot = mainArray[pivotIdx];
  let i = startIdx; // left wall
  let j = endIdx - 1; // right wall

  animations.push(["compare", [pivotIdx], [endIdx]]);
  animations.push(["primary", [pivotIdx], [endIdx]]);
  animations.push(["swap", [pivotIdx, mainArray[endIdx]], [endIdx, mainArray[pivotIdx]]]);
  swap(mainArray, endIdx, pivotIdx);

  while (i < j) {
    while (i < j && mainArray[i] <= pivot) {
      i++;
    }
    while (i < j && mainArray[j] > pivot) {
      j--;
    }
    animations.push(["compare", [i], [j]]);
    animations.push(["primary", [i], [j]]);
    if (mainArray[i] < mainArray[j]) {
      animations.push(["swap", [i, mainArray[j]], [j, mainArray[i]]]);
      swap(mainArray, i, j);
    } else {
      animations.push([""]);
      break;
    }
    console.log(`${i} ${j}`);
  }


  animations.push(["compare", [endIdx], [j]]);
  animations.push(["primary", [endIdx], [j]]);
  animations.push(["swap", [endIdx, mainArray[j]], [j, mainArray[endIdx]]]);
  swap(mainArray, endIdx, j);

  return startIdx;
}

const medianOfThree = (mainArray, startIdx, endIdx) => {
  let midIdx = Math.floor((startIdx + endIdx) / 2);
  if (mainArray[startIdx] > mainArray[midIdx]) {
    swap(mainArray, startIdx, midIdx);
  }
  if (mainArray[startIdx] > mainArray[endIdx]) {
    swap(mainArray, startIdx, endIdx);
  }
  if (mainArray[midIdx] > mainArray[endIdx]) {
    swap(mainArray, midIdx, endIdx);
  }
  return midIdx;
}
