import React, { useCallback, useEffect, useState } from 'react'
import ButtonCounter from './ButtonCounter';

function CounterCallback() {
    let [count ,setCount] = useState(0)

    let increment = useCallback(()=>{
        setCount(prevCount => prevCount+1);
    },[]) 

    useEffect(()=>{
        console.log("inside UseEffect")
    },[increment])

  return (
    <>
      <h1>count : {count}</h1>
      <ButtonCounter increment={increment}/>
    </>
  )
}

export default CounterCallback