import React from 'react'
import { FaUser } from "react-icons/fa";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light px-lg-4 border-bottom border-danger">
        <div className="container-fluid d-flex">
          <Link to="/" className="navbar-brand text-danger p-0" href="#"><h2 className='m-0 '>Painter</h2></Link>
          <div className='toggler-btn'>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className='d-flex gap-3 order-lg-3'>
            <Link to="/usersingin" className='text-danger'><FaUser className='fs-4 ' /></Link>
            <Link to="/AddToCart" className='text-danger'><RiShoppingCart2Fill className='fs-4 ' /></Link>
            <Link to="/wishlist"> <FaHeart className='fs-4 text-danger' /></Link>
          </div>
          <div className="collapse navbar-collapse m-auto flex-grow-0" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5 fw-medium gap-lg-4 gap-3 d-flex text-end justify-content-center">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/inkwork" className="nav-link active" aria-current="page" href="#">Ink Work</Link>
              </li>
              <li className="nav-item">
                <Link to="/abstractart" className="nav-link active" aria-current="page" href="#">Abstract Art</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar

