import React from 'react'
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaPhone,
    FaPhoneSquareAlt,
} from "react-icons/fa";

function Footer() {
    return (
        <div className='p-5 bg-black ' id='contact' >
            <h1 className='container text-secondary pb-5 pt-5'>
                WE COOK ONLY <span style={{ color: "rgb(197,157,95)" }}>THE MOST</span> <br />
                <span style={{ color: "rgb(197,157,95)" }}>DELICIOUS</span> MEALS</h1>
            <div className='container '>
                <div className='justify-content-between row row-cols-1 row-cols-md-4'>
                    <div className="col card bg-black text-white mb-3" style={{ maxWidth: "300px" }}>
                        <div className="card-body ps-0 text-white">
                            <h4 className="card-title">ADDRESS</h4>
                            <p className="card-text">Germany — <br />
                                785 Street, Office 478  <br />
                                Berlin, De 81566</p>
                        </div>
                    </div>
                    <div className="col card bg-black  mb-3" style={{ maxWidth: "300px" }}>
                        <div className="card-body ps-0 text-white">
                            <h4 className="card-title">SOCIALS</h4>
                            <ul className="card-text list-unstyled d-flex gap-4 fs-4">
                                <li><FaFacebook /></li>
                                <li><FaTwitter /></li>
                                <li><FaInstagram /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col card bg-black text-white  mb-3" style={{ maxWidth: "300px" }}>

                        <div className="card-body ps-0 text-white">
                            <h4 className="card-title">Mail to</h4>
                            <p className="card-text"><h5>info@email.com</h5></p>
                        </div>
                    </div>
                    <div className="col card bg-black text-white  mb-3" style={{ maxWidth: "300px" }}>
                        <div className="card-body ps-0 text-white">
                            <h4 className="card-title">Call Us</h4>
                            <p className="card-text"><h5>+1 840 841 25 69</h5></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer