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

const swap = (array, i, j) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
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