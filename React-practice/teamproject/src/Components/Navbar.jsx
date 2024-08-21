import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-4 fs-5">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="./Home.jsx">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="./Team.jsx">Team</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">MyTolist</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Mytodolist2</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Mytodolist3</a>
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
  )
}

export default Navbar