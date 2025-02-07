

// import './App.css'
// import Container from './Components/Container'
// import { BrowserRouter, Route, Routes } from "react-router";

// function App() {

//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Container />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// export default App


import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Container from './Components/Container'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Container />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
