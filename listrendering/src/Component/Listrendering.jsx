import React from 'react'

function Listrendering() {
    const color=["red","yellow","blue"]
    const colorlist=color.map((color) => <li key={color} className=''>{color}</li> )

  return (
    <div>
        <ul>
            {colorlist}
        </ul>
    </div>
  )
}

export default Listrendering