import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './componant/Navbar';
import DisplayData from './componant/DisplayData';
import Home from './componant/Home';
import RealtimeData from './componant/RealtimeData';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/></>,
    },
    {
      path: "/home",
      element: <><Navbar/><Home/></>,
    },
    {
      path: "/display",
      element: <><Navbar/><DisplayData/></>,
    },
    {
      path: "/realtimedata",
      element: <><Navbar/><RealtimeData/></>,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App