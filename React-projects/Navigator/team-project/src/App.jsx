import Footer from "./component/Footer"
import Home from "./component/Home";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Team from "./component/Team";
import SessionStorage from "./component/SessionStorage";
import Display from "./component/Display";
import Navbar from "./component/Navbar";
import LocalStorage from "./component/LocalStorage";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <> <Navbar/> <Home/> <Footer/> </>,
    },
    {
      path: "/team",
      element:  <> <Navbar/> <Team/> <Footer/></>,
    },
    {
      path: "/session",
      element:  <> <Navbar/> <SessionStorage/><Footer/> </>,
    },
    {
      path: "/localStorage",
      element:  <> <Navbar/> <LocalStorage/> <Footer/></>,
    },
    {
      path: "/display",
      element:  <> <Navbar/> <Display/> <Footer/></>,
    },
  ]);


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
