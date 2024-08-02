import React from 'react'
import { useState } from 'react';

function Colorchang() {
    let colors = ["red", "yellow", "blue", "green", "pink"]
    let [count, setCount] = useState(0);

    
    function prevFun() {
        if (count != 0) {
            setCount(count - 1)
        }
    }
    
    function nextFun() {
        if (count < colors.length - 1) {
            setCount(count + 1)
        }
    }
    
    let colorlist = colors.map((color) => color);


    return (
        <div className='text-center bg-black py-5'>
            <h1 style={{color : colorlist[count]}}>Box Background Color Change</h1>
            <div className='d-flex justify-content-center align-items-center'>
                <button className='h-25' onClick={prevFun}>Prev</button>
                <div className=' border border-1 mx-5' style={{ height: 200, width: 200, backgroundColor: colorlist[count] }}></div>
                <button className='h-25' onClick={nextFun}>Next</button>
            </div>
        </div>
    )
}

export default Colorchang