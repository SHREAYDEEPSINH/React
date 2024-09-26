import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Components/Login';
import Singup from './Components/Singup';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Updatepassword from './Components/Updatepassword';

function App() {
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <><Navbar/><Home/></>,
    },
    {
      path: "/",
      element: <><Login/></>,
    },
    {
      path: "/singup",
      element: <><Singup/></>,
    },
    {
      path: "/update/:id",
      element: <><Updatepassword/></>,
    }
  ]);



  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App