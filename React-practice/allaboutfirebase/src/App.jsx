import React from 'react'
import Hello from './componant/Hello'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './componant/Navbar';
import DisplayData from './componant/DisplayData';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Hello/></>,
    },
    {
      path: "/display",
      element: <><Navbar/><DisplayData/></>,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App