import React from 'react'
import HocCounter from './HocCounter'

function ClickCounter(props) {
    let {count , incrimentCount} = props
  return (
    <>
      <div className='container'>
        <button className='btn btn-success' onClick={incrimentCount}>Click Me</button>
        <h1>Count : {count}</h1>
      </div>
    </>
  )
}

export default HocCounter(ClickCounter)