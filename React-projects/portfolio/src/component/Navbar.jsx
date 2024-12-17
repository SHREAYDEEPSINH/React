import React from 'react'

function Navbar({ color , toggleTheme , bgtheme}) {
    return (
        <>
            <nav className="navbar navbar-expand-md py-3 fixed-top backdrop-nav nav" >
                <div className="container-md container-fluid">
                    {/* <a className="navbar-brand" href="#">Navbar</a> */}

                    <svg xmlns="http://www.w3.org/2000/svg" onClick={toggleTheme}  width="40" height="40" fill="currentColor" className={`bi bi-asterisk text-white ${bgtheme} rounded-5 p-2`} viewBox="0 0 16 16">
                        <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1" />
                    </svg>
                    <div className="collapse navbar-collapse ms-4 " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-lg-0 gap-4  ">
                            <li className="nav-item">
                                <a className="nav-link active " style={{ color: color }} aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active " style={{ color: color }} aria-current="page" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active " style={{ color: color }} aria-current="page" href="#projects">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active " style={{ color: color }} aria-current="page" href="#skills">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active " style={{ color: color }} aria-current="page" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>




                    <div className='d-flex gap-2'>
                        <button className={`btn  git-button d-flex justify-content-center align-items-center ${bgtheme}`}><i className="fa-brands fa-github fs-5"></i></button>
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
                        <a className="nav-link active " style={{ color: color }} aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" style={{ color: color }} aria-current="page" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" style={{ color: color }} aria-current="page"
                            href="#projects">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" style={{ color: color }} aria-current="page" href="#skills">Skills</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" style={{ color: color }} aria-current="page" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar