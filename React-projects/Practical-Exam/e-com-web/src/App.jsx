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
import AbstractArt from './components/AbstractArt';
import AddToCart from './components/AddToCart';
import Footer from './components/Footer';
import Wishlist from './components/Wishlist';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Home/><AbstractArt/><InkWork/><Footer/></>,
    },
    {
      path: "/usersingin",
      element: <><UserSingIn/></>,
    },
    {
      path: "/usersingup",
      element: <><UserSingup/></>,
    },
    {
      path: "/inkwork",
      element: <><Navbar/><InkWork/></>,
    },
    {
      path: "/abstractart",
      element: <><Navbar/><AbstractArt/></>,
    },
    {
      path: "/AddToCart",
      element: <><Navbar/><AddToCart/></>,
    },
    {
      path: "/wishlist",
      element: <><Navbar/><Wishlist/></>,
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App