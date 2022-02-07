import React from 'react';

export const OptionBar = (props) => {
  return (
    <header id='optionBar'>
      <nav>
        <ul id="options">
          <li>
            <button className="array-reset" onClick={
              () => { props.resetArray(); }
            }>Generate New Dataset</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}