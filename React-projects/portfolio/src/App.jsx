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



function App() {

  const [navbarColor, setNavbarColor] = useState("#333");


  // Array of color schemes
  const colorSchemes = [
    { textColor: "light-green", bgColor: "bg-light-green", textColorlight:"light-light-green", bgColorlight: "bg-light-light-green",},
    { textColor: "light-red", bgColor: "bg-light-red", textColorlight:"light-light-red",  bgColorlight: "bg-light-light-red",},
    { textColor: "light-yellow", bgColor: "bg-light-yellow", textColorlight:"light-light-yellow",  bgColorlight: "bg-light-light-yellow",},
  ];

  // State to track the current color scheme index
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  // Toggle to the next color scheme
  const toggleTheme = () => {
    setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colorSchemes.length);
  };

  // Get the current color scheme
  const theme = colorSchemes[currentColorIndex];



  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
        <Navbar color={navbarColor} toggleTheme={toggleTheme} bgtheme={theme.bgColor}/>
        <Home bgthemelight={theme.bgColorlight}/>
        <Overview texttheme={theme.textColor}/>
        <Projects setNavbarColor={setNavbarColor} texttheme={theme.textColor}/>
        <Skills setNavbarColor={setNavbarColor} textthemelight={theme.textColorlight}/>
        <Contact bgtheme={theme.bgColor} texttheme={theme.textColor}/>
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