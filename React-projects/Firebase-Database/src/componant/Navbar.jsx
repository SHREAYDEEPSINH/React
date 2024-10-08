import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container">
                    <a className="navbar-brand  text-white fs-3" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-4 fs-5">
                            <li>
                                <Link to="/realtimedata" className="nav-link active text-white" aria-current="page" href="#">Realtime Data</Link>
                            </li>
                            <li>
                                <Link to="/display" className="nav-link active text-white" aria-current="page" href="#">Display</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar