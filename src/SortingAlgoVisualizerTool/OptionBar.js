import React, { useState } from 'react';

// An array of numbers that setArrayNum can use to set the array length.
const arrayNumOptions = [10, 20, 50, 100, 200];
// An array of sorting algorithms that can be used to sort the array.
const sortingAlgorithms = [['mergeSort', 'Merge Sort'],
['bubbleSort', 'Bubble Sort'],
['insertionSort', 'Insertion Sort'],
['selectionSort', 'Selection Sort'],
['quickSort', 'Quick Sort']];

// Check before animating the array.
const checkArray = (animateArray, array, sortName, configData, sorting, setSorting) => {
  // If sortName is not empty, then animate the array.
  if (sortName !== "_") {
    // setSorting(true);
    animateArray(array, sortName, configData, sorting, setSorting);
  }
};

export const OptionBar = (props) => {
  const [sort, setSort] = useState('_');
  const [sorting, setSorting] = useState(false);

  return (
    <header id='optionBar' className={sorting ? "exec" : "init"}>
      <div id='title-bar'>
        <h1>
          Sorting Algorithm Visualizer
        </h1>
      </div>
      <nav >
        <ul id="options" className={sorting ? "hidden" : "shown"}>
          <li>
            <select id="sort-select" className='form-select form-select-lg mb-3' onChange={(e) => {
              setSort(e.target.value);
              props.resetArray();
            }}>
              <option value="_">Select Algorithm</option>
              {sortingAlgorithms.map((algorithm) => (
                <option key={algorithm} value={algorithm[0]}>{algorithm[1]}</option>
              ))}
            </select>
          </li>
          <li>
            <select
              id="array-num"
              value={props.arrayNum}
              className='form-select form-select-lg mb-3'
              onChange={(e) => { props.setArrayNum(e.target.value); }}
            >
              {arrayNumOptions.map((num) => (
                <option key={num} value={num}>
                  {num} items
                </option>
              ))}
            </select>
          </li>
          <li>
            <div>
              <button type="button" className="array-reset btn btn-lg btn-dark" onClick={
                () => { props.resetArray(); }
              }>Generate New Array</button>
            </div>
          </li>
          <li>
            <div>
              <button type="button" className="animate btn btn-lg btn-dark" onClick={
                () => { checkArray(props.animateArray, props.array, sort, props.configData, sorting, setSorting); }
              }>Animate Algorithm</button>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  )
}