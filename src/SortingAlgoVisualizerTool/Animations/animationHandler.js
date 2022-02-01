import { mergeSortAnimation } from "../Algorithms/sortingAlgorithm";

//  Animation function to handle animations in the sorting algorithm visualization tool.
export const animationHandler = (array, algorithm, config) => {
  let animations = [];
  switch (algorithm) {
    case 'bubbleSort':
      // bubbleSort(array, animations);
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

const mergeSort = (array, config) => {
  const animations = mergeSortAnimation(array);

  for (let i = 0; i < animations.length; i++) {
    const arrayBars = document.getElementsByClassName('array-bar');
    const isColorChange = i % 3 !== 2;
    if (isColorChange) {
      const [barOneIdx, barTwoIdx] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      const color = i % 3 === 0 ? config.secondaryColor : config.primaryColor;
      setTimeout(() => {
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      }, i * config.animationSpeed);
    } else {
      setTimeout(() => {
        const [barOneIdx, newHeight] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        barOneStyle.height = `${newHeight}px`;
      }, i * config.animationSpeed);
    }
  }
}