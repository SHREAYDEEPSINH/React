import React from "react";
import logo from "../Assets/Logo1.png"
import './Footer.css'
import icon1 from "../Assets/footericon1.png"
import icon2 from "../Assets/footericon2.png"
import icon3 from "../Assets/footericon3.png"
import fb from "../Assets/fb.png"
import twitter from "../Assets/twitter.png"
import linkedin from "../Assets/linkedin.png"

function Footer() {
    return (

        <div className="footer-section" style={{ height: "440px", marginTop: "120px" }}>
            <div className="foot-main">
                <div className="footer-top">
                    <div className="footer-logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="footer-links">
                        <div>Home</div>
                        <div>Careers</div>
                        <div>About</div>
                        <div>Security</div>
                    </div>
                </div>
                <div className="footer-divider">.</div>
                <div className="footer-contact">
                    <div className="contact-item">
                        <div className="contact-icon">
                            <img src={icon1} alt="" />
                        </div>
                        <div className="contact-text">hello@skillbirdge.com</div>
                    </div>
                    <div className="contact-item">
                        <div className="contact-icon">
                            <img src={icon2} alt="" />
                        </div>
                        <div className="contact-text">+91 91813 23 2309</div>
                    </div>
                    <div className="contact-item">
                        <div className="contact-icon">
                            <img src={icon3} alt="" />
                        </div>
                        <div className="contact-text">Somewhere in the World</div>
                    </div>
                </div>
                <div className="footer-divider">.</div>
                <div className="footer-bottom">
                    <div className="social-icons">
                        <div className="social-icon"><img src={fb} alt="" /></div>
                        <div className="social-icon"><img src={twitter} alt="" /></div>
                        <div className="social-icon"><img src={linkedin} alt="" /></div>
                    </div>
                    <div className="footer-rights">YourBank All Rights Reserved</div>
                    <div className="footer-policies">
                        <div className="policy-item">Privacy Policy</div>
                        <div className="policy-divider"></div>
                        <div className="policy-item">Terms of Service</div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Footer;
