import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-4">
                            <li class="nav-item">
                                <Link to="/home" class="nav-link active" aria-current="page" href="#">Home</Link>
                            </li>
                            <li>
                                <Link to="" class="nav-link active" aria-current="page" href="#">LogIn</Link>
                            </li>
                            <li>
                                <Link to="/realtimedata" class="nav-link active" aria-current="page" href="#">Realtime Data</Link>
                            </li>
                            <li>
                                <Link to="/display" class="nav-link active" aria-current="page" href="#">Display</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar