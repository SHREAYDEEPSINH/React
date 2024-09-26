import React from 'react'

function NameComonent({name}) {
    console.log("Name component")

  return (
    <>
        <h2>Name : {name}</h2>
    </>
  )
}

export default React.memo(NameComonent)