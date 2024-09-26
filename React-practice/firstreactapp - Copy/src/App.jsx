
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Container from "./Component/Container";
import Navbar from "./Component/Navbar";
import Slider from "./Component/Slider";
import Card from "./Component/Card";
import Services from "./Component/Services";
import Special from "./Component/Special";
import Footer from "./Component/Footer";



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Slider/><Footer/></>,
    },
    {
      path: "/today",
      element: <><Navbar/><Card/><Footer/></>,
    }, 
    {
      path: "/services",
      element: <><Navbar/><Services/><Footer/></>,
    },
    {
      path: "/ourspecial",
      element: <><Navbar/><Special/><Footer/></>,
    },
    {
      path: "/contact",
      element: <><Navbar/><Footer/></>,
    },
  ]);

  return (
    <>
     <RouterProvider router={router} />
      {/* <Navbar />
      <Container /> */}
    </>
  )
}

export default App
