import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="text-dark pt-5 pb-3 border-top border-top border-danger">
            <div className="container">
                <div className="row justify-content-between m-auto gap-3">
                    <div className="col-md-3 d-flex flex-column gap-2">
                        <h2>Contact Us</h2>
                        <h5>
                            If you have any questions or inquiries, feel free to reach out to us!
                        </h5>
                        <ul className="list-unstyled">
                            <li><strong>Email:</strong> contact@paintershop.com</li>
                            <li><strong>Phone:</strong> (123) 456-7890</li>
                            <li><strong>Address:</strong> 123 Art St, Painter City, PC 12345</li>
                        </ul>
                    </div>
                    <div className="col-md-3 d-flex flex-column gap-2">
                        <h2>Get in Touch</h2>
                        <form>
                            <div className="mb-3">
                                <input type="text" className="form-control" placeholder="Your Name" required />
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control" placeholder="Your Email" required />
                            </div>
                            <div className="mb-3">
                                <textarea className="form-control" rows="3" placeholder="Your Message" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-danger">Send Message</button>
                        </form>
                    </div>
                    <div className="col-md-3 d-flex flex-column gap-2">
                        <h2>Follow Us</h2>
                        <div className="social-icons fs-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-dark me-3"><FaFacebook /></a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-dark me-3"><FaInstagram /></a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-dark me-3"><FaTwitter /></a>
                            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-dark"><FaPinterest /></a>
                        </div>
                    </div>
                </div> 
                <hr  className='text-danger'/>
                <div className="text-center mt-4 ">
                    <p className='fs-3'>&copy; {new Date().getFullYear()} Painter Shop. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

