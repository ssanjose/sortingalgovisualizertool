import React, { useEffect, useState } from 'react';
import './CSS/SortingVisualizer.css';
import { OptionBar } from './OptionBar';

function RandomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Reset array data in SortingVisualizer to default.
function ResetArray(arrayLength) {
    const arr = [];
    for (let i = 0; i < arrayLength; i++) {
        arr.push(RandomIntFromInterval(5, 800));
    }
    return arr;
}

export const SortingVisualizer = (props) => {
    const [array, setArray] = useState([]);
    const [sorted, setSorted] = useState(false);
    const [arrayNum, setArrayNum] = useState(400);
    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    });

    useEffect(() => {
        setArray(ResetArray(arrayNum));

        const HandleResize = () => {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            });
        };

        window.addEventListener('resize', HandleResize);
        return () => {
            window.removeEventListener('resize', HandleResize);
        };
    }, [arrayNum]);

    return (
        <>
            <OptionBar />
            <main>
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
                <button className="array-reset" onClick={
                    () => { setArray(ResetArray(arrayNum)); }
                }>Generate New Dataset</button>
            </main>
        </>
    )
}