import React from 'react'

function Listrendering() {
  const color = ["red", "yellow", "blue", "green", "pink"]
  const colorlist = color.map((color, index) => <li key={index} style={{ backgroundColor: `${color}` }}>{color}</li>)

  return (
    <div>
      <ul className='list-unstyled'>
        {colorlist}
      </ul>
    </div>
  )
}

export default Listrendering