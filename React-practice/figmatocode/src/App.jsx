import React from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import Products from './Component/Products'
import Usecases from './Component/Usecases'
import Features from './Component/Features'
import Questions from './Component/Questions'
import Testimonials from './Component/Testimonials'
import Openaccount from './Component/Openaccount'
import Footer from './Component/Footer'


function App() {
  return (
    <>
      
       <Navbar/>
       <Hero/>
       <Products/>
       <Usecases/>
       <Features/>
       <Questions/>
       <Testimonials/>
       <Openaccount/>
       <Footer/>
    </>
  )
}

export default App