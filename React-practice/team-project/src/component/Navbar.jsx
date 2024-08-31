import React from 'react'
import { NavLink } from 'react-router-dom'
import "../App.css"

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
          <div className="container">
            <a className="navbar-brand" href="#"><span className='text-danger fw-bold fs-4'>S & D</span></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-4 fs-5 ">
                <li className="nav-item ">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/team">Team</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/session">Session Storage</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/localStorage">Local Storage</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/display">Display</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
  )
}

export default Navbar