import React from 'react'
import logo from '../Assets/logo.png'
import { NavLink } from 'react-router-dom'


function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-black" style={{height :"140px"}}  data-bs-theme="dark" >
        <div className="container d-flex flex-lg-column">
          <a className="navbar-brand" href="#"><img width={80} src={logo} alt="" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item d-flex justify-content-between gap-lg-5">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/today">Today</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/ourspecial">Our Special</NavLink>
                <NavLink to="/contact">Contact us</NavLink>
              </li>
              
            </ul>
            
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar