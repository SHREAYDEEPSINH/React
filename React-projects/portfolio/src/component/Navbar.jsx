import React from 'react'

function Navbar({ color }) {
    return (
        <>
            <nav className="navbar navbar-expand-md py-3 fixed-top backdrop-nav nav" >
                <div className="container-md container-fluid">
                    {/* <a className="navbar-brand" href="#">Navbar</a> */}

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-4 ">
                            <li className="nav-item">
                                <a className="nav-link active " style={{ color : color }} aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active " style={{ color : color }} aria-current="page" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active " style={{ color : color }} aria-current="page" href="#projects">Projects</a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link active " style={{ color : color }} aria-current="page" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>




                    <button className='btn bg-light-green git-button d-flex justify-content-center align-items-center'><i className="fa-brands fa-github fs-5"></i></button>
                    <div>
                        <button className="navbar-toggler bg-light-green border-0 toggle-btn d-flex justify-content-center align-items-center d-md-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg" aria-label="Toggle navigation">
                            <i className="fa-solid fa-ellipsis-vertical "></i>
                        </button>
                    </div>
                </div>
            </nav>


            <div className="offcanvas offcanvas-end" tabIndex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
                <div className="offcanvas-header">
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>

                <ul className="navbar-nav me-auto mb-2 mb-lg-0 offcanvas-body d-md-none">
                    <li className="nav-item">
                        <a className="nav-link active " style={{ color : color }} aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" style={{ color : color }} aria-current="page" href="#">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" style={{ color : color }} aria-current="page" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" style={{ color : color }} aria-current="page" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar