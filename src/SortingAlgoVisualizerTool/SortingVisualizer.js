import React, { useEffect, useState } from 'react';
import { animationHandler } from './Animations/animationHandler';
import './CSS/SortingVisualizer.css';
import { OptionBar } from './OptionBar';

const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Reset array data in SortingVisualizer to default.
const resetArray = (arrayLength) => {
  const arr = [];
  for (let i = 0; i < arrayLength; i++) {
    arr.push(randomIntFromInterval(5, 800));
  }
  return arr;
}

// Animates the array by calling the animationHandler
const animateArray = (array, algorithm, config) => {
  animationHandler(array, algorithm, config);
}

export const SortingVisualizer = (props) => {
  const [array, setArray] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [arrayNum, setArrayNum] = useState(400);

  // Config data
  const [configData, setConfigData] = useState({
    primaryColor: 'turquoise',
    secondaryColor: 'red',
    boundColor: 'green',
    animationSpeed: 5
  });

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  useEffect(() => {
    setArray(resetArray(arrayNum));
  }, [arrayNum]);

  return (
    <>
      <OptionBar />
      <main id="main-content">
        <div id="visualizer">
          {array.map((value, index) => (
            <div className='array-bar' key={index}
              style={{
                height: `${value}px`,
                backgroundColor: 'turquoise',
                width: `${Math.floor(window.innerWidth / arrayNum)}px`,
                display: 'inline-block'
              }}>
            </div>
          ))}
        </div>
        <div className='button'>
          <button className="array-reset" onClick={
            () => { setArray(resetArray(arrayNum)); }
          }>Generate New Dataset</button>
          <button className="merge-sort" onClick={
            () => { animateArray(array, "mergeSort", configData); }
          }>Merge Sort</button>
          <button className="bubble-sort" onClick={
            () => { animateArray(array, "bubbleSort", configData); }
          }>Bubble Sort</button>
          <button className="insertion-sort" onClick={
            () => { animateArray(array, "insertionSort", configData); }
          }>Insertion Sort</button>
          <button className="selection-sort" onClick={
            () => { animateArray(array, "selectionSort", configData); }
          }>Selection Sort</button>
        </div>
      </main>
    </>
  )
}