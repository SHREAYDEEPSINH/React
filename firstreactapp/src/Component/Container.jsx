import React from 'react';
import Slider from './Slider';
import Card from './Card';
import Special from "./Special";
import Footer from './Footer';
import Services from './Services';




function Container() {
  return (
    <div className=''>
       <Slider/>
       <Card/>
       <Services/>
       <Special/>
       <Footer/>
    </div>
  )
}

export default Container