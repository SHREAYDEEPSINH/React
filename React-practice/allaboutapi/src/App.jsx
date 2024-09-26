
import './App.css'
import Add from './Component/Add';
import DisplayData from './Component/DisplayData'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Update from './Component/Update';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DisplayData/>,
    },
    {
      path: "/add",
      element: <Add/>,
    },
    {
      path: "/update/:id",
      element: <Update/>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
