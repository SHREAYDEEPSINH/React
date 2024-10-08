import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

    let [user ,setUser] = useState(JSON.parse(localStorage.getItem("lsItems")) || [] );

    function logout(){
        setUser(localStorage.removeItem("lsItems"))
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="container collapse navbar-collapse d-flex justify-content-between align-items-center my-2 fs-5" id="navbarSupportedContent">
                        <div>
                            <ul className="navbar-nav mb-2 mb-lg-0 ">
                                <Link to="/home" className='text-white text-decoration-none'>Home</Link>
                            </ul>
                        </div>
                        <div className='d-flex gap-4'>
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <h4 className='text-white m-0'>Welcome {user.name}</h4>
                            </ul>
                            <ul className="navbar-nav mb-2 mb-lg-0">

                                {(user != "")? (<Link to="/" className='text-white text-decoration-none' onClick={logout}>LogOut</Link>) : (<Link to="/" className='text-white text-decoration-none'>Login</Link>)}
                                
                            </ul>
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <Link to="/singup" className='text-white text-decoration-none'>SingUp</Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar