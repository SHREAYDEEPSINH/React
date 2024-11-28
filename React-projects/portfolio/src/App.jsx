import React, { useState } from 'react'
import Navbar from './component/Navbar'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css"
import Home from './component/Home';
import Overview from './component/Overview';
import Projects from './component/Projects';



function App() {

  const [navbarColor, setNavbarColor] = useState("#333");

  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
        <Navbar color={navbarColor} />
        <Home />
        <Overview />
        <Projects setNavbarColor={setNavbarColor}/>
      </>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App