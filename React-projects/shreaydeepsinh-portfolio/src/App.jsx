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
import Projectpage from './component/Projectpage';
import Aboutpage from './component/Aboutpage';
import Contactpage from './component/Contactpage';
import Skillspage from './component/Skillspage';


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
    {
      path: "/projects",
      element: <ThemeProvider>
        <Navbar color={navbarColor} />
        <Projectpage/>
        <Contact/>
      </ThemeProvider>,
    },
    {
      path: "/about",
      element: <ThemeProvider>
        <Navbar color={navbarColor} />
        <Aboutpage/>
        <Contact/>
      </ThemeProvider>,
    },
    {
      path: "/contact",
      element: <ThemeProvider>
        <Navbar color={navbarColor} />
        <Contactpage/>
        <Contact/>
      </ThemeProvider>,
    },
    {
      path: "/skills",
      element: <ThemeProvider>
        <Navbar color={navbarColor} />
        <Skillspage/>
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