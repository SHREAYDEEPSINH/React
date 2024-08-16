import React from "react"

function Navbar(props) {
    return (
        <>
            <nav className="navbar align-items-start py-5 d-none d-xl-flex bg-body-tertiary position-fixed h-100" style={{ width: "250px" }}>
                <div className="container h-100">
                    <div className="d-flex flex-column justify-content-between overflow-y-auto h-100 text-center w-100 gap-5" >
                        <div className='d-flex flex-column gap-5'>
                            <a className="navbar-brand m-0" href="#"><img width={"85%"} src="src/Assets/Logo.png" alt="" /></a>
                            <ul className="navbar-nav d-flex flex-column fs-5">
                                <li className="nav-item">
                                    <a className="nav-link active " aria-current="page" href="#home">Home</a>
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
                                <button type="button" className="btn btn-dark me-2" onClick={props.dark}>Dark</button>
                                <button type="button" className="btn btn-light border border-2" onClick={props.light}>Light</button>
                            </span>
                        </div>
                    </div>
                </div>
            </nav>



            <button className="btn d-flex d-xl-none  btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">+</button>

            <div className="offcanvas d-flex d-xl-none offcanvas-start" style={{width:"250px"}} data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel"></h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">

                    <div className="h-100">
                        <div className="d-flex flex-column justify-content-between overflow-y-auto h-100 text-center w-100 gap-5" >
                            <div className='d-flex flex-column gap-5'>
                                <a className="navbar-brand m-0" href="#"><img width={"85%"} src="src/Assets/Logo.png" alt="" /></a>
                                <ul className="navbar-nav d-flex flex-column fs-5">
                                    <li className="nav-item">
                                        <a className="nav-link active " aria-current="page" href="#home">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="#about">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="#">Products</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="#">Register</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className='' >Hello Shreaydeepsinh</h4>
                                <span>
                                    <button type="button" className="btn btn-dark me-2" onClick={props.dark}>Dark</button>
                                    <button type="button" className="btn btn-light border border-2" onClick={props.light}>Light</button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar