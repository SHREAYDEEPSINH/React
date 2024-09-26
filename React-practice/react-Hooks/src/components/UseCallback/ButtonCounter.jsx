import React from 'react'

function ButtonCounter({increment}) {
    console.log("inside ButtonCounter")
    return (
        <>
            <button className='btn btn-danger' onClick={increment}>+</button>
        </>
    )
}

export default React.memo(ButtonCounter)