import React, { useState } from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'

function Container() {
  let [mode, setMode] = useState("dark")

  function darkHendler() {
    setMode("dark")
  }
  function lightHendler() {
    setMode("light")
  }
  return (
    <>
      <div data-bs-theme={mode}>
        <Navbar dark={darkHendler} light={lightHendler} />
        <div className='forcontain'>
          <Home />
          <About />
        </div>
      </div>
    </>
  )
}

export default Container