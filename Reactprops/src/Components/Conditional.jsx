import React from 'react'
import Drive from './Drive'

function Conditional() {
 const ans=10;

  return (
    <div>
        <Drive age={ans} allow={(ans>18)? "can" : "cannot"} /> 
    </div>
  )
}

export default Conditional