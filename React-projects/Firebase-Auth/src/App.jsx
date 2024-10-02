import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './componant/Navbar';
import UserSingup from './componant/UserSingup';
import UserSingIn from './componant/UserSingIn';
import Home from './componant/Home.Jsx';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><UserSingIn/></>,
    },
    {
      path: "/singUp",
      element: <><Navbar/><UserSingup/></>,
    },
    {
      path: "/home",
      element: <><Navbar/><Home/></>,
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App