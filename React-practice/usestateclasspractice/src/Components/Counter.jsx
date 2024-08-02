import React, { useState } from 'react'

function Counter() {
    const [count, countState] = useState(0)

    function decriment(){
        if(count!=0){
            countState(count-1)
        }
    }
    function incriment(){
        countState(count+1)
    }

    return (
        <div>
            <h1 className='text-center'>Conter</h1>
            <div className='text-center'>
            <button type="button" class="btn btn-info" onClick={decriment}>Decriment</button>
            <button type="button" class="btn btn-warning mx-4">{count}</button>
            <button type="button" class="btn btn-info" onClick={incriment}>Incriment</button>
            </div>
        </div>
    )
}

export default Counter