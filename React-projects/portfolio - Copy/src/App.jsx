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
import Skills from './component/Skills';
import Contact from './component/Contact';
import { ThemeProvider } from './component/ThemeContext';



function App() {

  const [navbarColor, setNavbarColor] = useState("#333");

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ThemeProvider>
        <Navbar color={navbarColor} />
        <Home/>
        <Overview />
        <Projects setNavbarColor={setNavbarColor} />
        <Skills setNavbarColor={setNavbarColor} />
        <Contact/>
      </ThemeProvider>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App