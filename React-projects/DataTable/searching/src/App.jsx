
import './App.css'
import Product from './components/Product'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Product/></>,
    },

  ]);

  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
