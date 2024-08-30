import React from 'react'
import HocCounter from './HocCounter'

function HoverCounter(props) {
    let {count ,incrimentCount} =props

    return (
        <>
            <div className='container'>
                <button className='btn btn-success' onMouseOver={incrimentCount}>Hover Me</button>
                <h1>Count : {count}</h1>
            </div>
        </>
    )
}

export default HocCounter(HoverCounter)