import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './componant/Navbar';
import DisplayData from './componant/DisplayData';
import RealtimeData from './componant/RealtimeData';
import EditData from './componant/EditData';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><RealtimeData/></>,
    },
    {
      path: "/display",
      element: <><Navbar /><DisplayData /></>,
    },
    {
      path: "/realtimedata",
      element: <><Navbar /><RealtimeData /></>,
    },
    {
      path: "/edit/:id",
      element: <><Navbar /><EditData/></>,
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App