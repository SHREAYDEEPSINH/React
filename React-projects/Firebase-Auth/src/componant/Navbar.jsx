import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg text-bg-white fs-4">
                <div class="container">
                    <a class="navbar-brand fs-4 text-white" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li class="nav-item d-flex gap-3 ">
                                <Link to="/home" class="nav-link active text-white" aria-current="page" href="#">Home</Link>
                                <Link to="/" class="nav-link active text-white" aria-current="page" href="#">SingIn</Link>
                                <Link to="/singUp" class="nav-link active text-white" aria-current="page" href="#">SingUp</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar