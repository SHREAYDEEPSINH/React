import React, { useState } from 'react';
import SessionStorage from './SessionStorage';
import Textlist from './Textlist';
import Display from './Display';
import Home from './Home';
import Team from './Team';
import { NavLink } from 'react-router-dom';

function Navder() {


  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
          <div className="container">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-4 fs-5">
                <li className="nav-item">
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
            <div>
              <ul className='d-flex gap-3 list-unstyled align-items-center h-100 m-0'>
                <li><a href="">linkedin</a></li>
                <li><a href="">github</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>


    </>
  );
}

export default Navder;
