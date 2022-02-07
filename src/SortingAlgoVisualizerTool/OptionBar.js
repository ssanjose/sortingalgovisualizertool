import React, { useState } from 'react';

// An array of numbers that setArrayNum can use to set the array length.
const arrayNumOptions = [10, 50, 100, 200, 1000];
// An array of sorting algorithms that can be used to sort the array.
const sortingAlgorithms = ['bubbleSort', 'insertionSort', 'selectionSort', 'mergeSort', 'quickSort'];

export const OptionBar = (props) => {
  const [sort, setSort] = useState('mergeSort');

  return (
    <header id='optionBar'>
      <nav>
        <ul id="options">
          <li>
            <select id="sort-select" defaultValue={'mergeSort'} onChange={(e) => {
              setSort(e.target.value);
            }}>
              {sortingAlgorithms.map((algorithm) => (
                <option key={algorithm} value={algorithm}>{algorithm}</option>
              ))}
            </select>
          </li>
          <li>
            <select
              id="arrayNum"
              value={props.arrayNum}
              onChange={(e) => props.setArrayNum(e.target.value)}
            >
              {arrayNumOptions.map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </li>
          <li>
            <button className="array-reset" onClick={
              () => { props.resetArray(); }
            }>Generate New Array</button>
          </li>
          <li>
            <button className="animate" onClick={
              () => { props.animateArray(props.array, sort, props.configData); }
            }>Animate</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}