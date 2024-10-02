import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './components/Navbar';
import UserSingup from './components/UserSingup';
import UserSingIn from './components/UserSingIn';
import Home from './components/Home';
import './App.css'
import InkWork from './components/InkWork';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Home/><InkWork/></>,
    },
    {
      path: "/usersingin",
      element: <><UserSingIn/></>,
    },
    {
      path: "/usersingup",
      element: <><UserSingup/></>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App