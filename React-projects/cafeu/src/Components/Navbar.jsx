import React from 'react'
import Navbarprops from './Navbarprops'


function Navbar() {
    return (
        <div >
            <nav className="navbar navbar-expand-lg ">
                <div className="container">
                    <a className="navbar-brand" href="#"><img src="src/Assets/logo.png" alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3 fw-medium d-flex align-items-center">
                            <Navbarprops  title="Home" data1="Home1" data2="Home2" data3="Home3" data4="Home4" data5="Home5" data6="Home6" data7="Home7"/>
                            <Navbarprops  title="About Us" data1="About" data2="About Two" />
                            <Navbarprops  title="Menu" />
                            <Navbarprops  title="Blog" />
                            <Navbarprops  title="Pages" />
                            <Navbarprops  title="Contact" />
                            <li className='me-4 ms-1'>
                                <i className="bi bi-search"></i>
                            </li>
                            <li className='d-flex gap-3 align-items-center'>
                                <img src="src/Assets/callicon.png" alt="" />
                                <h6 className='m-0'> +880 123 456 789</h6>
                            </li>
                        </ul>

                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Navbar