import Footer from "./component/Footer"
import Home from "./component/Home";
import Navder from "./component/Navder"
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Team from "./component/Team";
import SessionStorage from "./component/SessionStorage";
import Textlist from "./component/Textlist";
import Display from "./component/Display";



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <> <Navder/> <Home/> <Footer/> </>,
    },
    {
      path: "/team",
      element:  <> <Navder/> <Team/> <Footer/></>,
    },
    {
      path: "/session",
      element:  <> <Navder/> <SessionStorage/><Footer/> </>,
    },
    {
      path: "/localStorage",
      element:  <> <Navder/> <Textlist/> <Footer/></>,
    },
    {
      path: "/display",
      element:  <> <Navder/> <Display/> <Footer/></>,
    },
  ]);


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
