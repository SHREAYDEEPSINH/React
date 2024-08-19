import React from 'react'

function Navbar(props) {

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container">
                    <a className="navbar-brand fst-italic fw-bold" href="#">ShopNow</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex gap-2">
                            <li className="nav-item">
                                <button type="button" className="btn btn-secondary" onClick={props.all}>All</button>
                            </li>
                            <li className="nav-item">
                                <button type="button" className="btn btn-secondary" onClick={props.men}>Men</button>
                            </li>
                            <li className="nav-item">
                                <button type="button" className="btn btn-secondary" onClick={props.women}>Women</button>
                            </li>
                            <li className="nav-item">
                                <button type="button" className="btn btn-secondary" onClick={props.jewelery}>Jewelery</button>
                            </li>
                            <li className="nav-item">
                                <button type="button" className="btn btn-secondary" onClick={props.electronics}>Electronics</button>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar