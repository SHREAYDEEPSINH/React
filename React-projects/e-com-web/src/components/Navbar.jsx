import React from 'react'
import { FaUser } from "react-icons/fa";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light px-4 border-bottom border-danger">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-danger" href="#"><h2>Painter</h2></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5 fw-medium gap-4">
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
          <div className='d-flex gap-3'>
            <Link to="/usersingin" className='text-danger'><FaUser className='fs-4 ' /></Link>
            <Link to="/AddToCart" className='text-danger'><RiShoppingCart2Fill className='fs-4 ' /></Link>
            {/* <Link to="/wishlist"> <FaHeart className='fs-4 text-danger' /></Link> */}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar