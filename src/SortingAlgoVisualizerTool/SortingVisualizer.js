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
    arr.push(randomIntFromInterval(5, window.innerHeight - 50));
  }
  return arr;
}

// Animates the array by calling the animationHandler
const animateArray = (array, algorithm, config) => {
  animationHandler(array, algorithm, config);
}

export const SortingVisualizer = (props) => {
  const [array, setArray] = useState([]);
  const [arrayNum, setArrayNum] = useState(50);

  // Config data
  const [configData, setConfigData] = useState({
    primaryColor: 'turquoise',
    secondaryColor: 'red',
    boundColor: 'lime',
    compareColor: 'yellow',
    swapColor: 'slateblue',
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
      <OptionBar
        array={array}
        arrayNum={arrayNum}
        setArrayNum={setArrayNum}
        resetArray={() => setArray(resetArray(arrayNum))}
        animateArray={animateArray}
        configData={configData}
        setConfigData={setConfigData}
      />
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
      </main>
    </>
  )
}