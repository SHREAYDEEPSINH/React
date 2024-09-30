import React from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './components/Navbar';
import UserSingup from './components/UserSingup';
import Hello from './components/Hello';
import UserSingIn from './components/UserSingIn';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/></>,
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