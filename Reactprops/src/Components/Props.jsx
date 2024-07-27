import React from 'react'

function Props({contury,color}) {
  return (
    <div className=''>
        <h1 className={color}>Hello {contury}</h1>
    </div>
  )
}

export default Props