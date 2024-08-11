import React, { useState } from 'react'
import Mode from './Mode'

function Navbar(props) {
    // let [mode, setMode] = useState("dark")

    // function darkHendler() {
    //     setMode("dark")
    // }
    // function lightHendler() {
    //     setMode( "light")
    // }

    return (
        <>
            <nav className="navbar align-items-start py-5 d-none d-xl-flex bg-body-tertiary position-fixed h-100" style={{ width: "250px" }} data-bs-theme="">
                <div className="container h-100">
                    <div className="d-flex flex-column justify-content-between overflow-y-auto h-100 text-center w-100 gap-5" >
                        <div className='d-flex flex-column gap-5'>
                            <a className="navbar-brand m-0" href="#"><img width={"85%"} src="src/Assets/Logo.png" alt="" /></a>
                            <ul className="navbar-nav d-flex flex-column fs-5">
                                <li className="nav-item">
                                    <a className="nav-link active " aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Products</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Register</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className='' >Hello Shreaydeepsinh</h4>
                            <span>
                                {/* <button type="button" className="btn btn-dark me-2" onClick={darkHendler}>Dark</button>
                                <button type="button" className="btn btn-light border border-2" onClick={lightHendler}>Light</button> */}
                                <Mode/>
                            </span>
                        </div>
                    </div>
                </div>
            </nav>



            <button className="btn d-flex d-xl-none  btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Enable both scrolling & backdrop</button>

            <div className="offcanvas d-flex d-xl-none offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <p>Try scrolling the rest of the page to see this option in action.</p>
                </div>
            </div>

            {/* 
            <a className="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                Link with href
            </a>
            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                Button with data-bs-target
            </button>

            <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div>
                        Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                    </div>
                    <div className="dropdown mt-3">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                            Dropdown button
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </div>
            </div> */}
            {/* 
            <ul className="nav flex-column bg-black position-fixed h-100" >
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Active</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                </li>
            </ul> */}
        </>
    )
}

export default Navbar