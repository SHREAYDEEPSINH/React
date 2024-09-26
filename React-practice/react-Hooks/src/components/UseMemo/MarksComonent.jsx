import React from 'react'

function MarksComonent({marks}) {
    console.log("marks component")
  return (
    <>
     <h2>Marks : {marks}</h2>
    </>
  )
}

export default React.memo(MarksComonent)