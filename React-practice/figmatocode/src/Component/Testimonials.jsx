import React from "react";
import './Testimonials.css'
import TestimonialsIcon from"../Assets/Testimonials Icon.png"
import leftArrow from "../Assets/leftArrow.png"
import rightArrow from "../Assets/rightArrow.png"

function Testimonials() {
    return (
        <div className="container">
            <div style={{ height: "481px", marginTop: "120px" }}>
          

                <div className="testimonials-section">
                    <div className="testimonials-header">
                        <div className="testimonials-header-left">
                            <div className="testimonials-title">
                                <span className="title-white">Our</span>
                                <span className="title-green"> Testimonials</span>
                            </div>
                            <div className="testimonials-description">
                                Discover how YourBank has transformed lives with innovative digital solutions and personalized customer service. See why our clients trust us for a secure and prosperous financial journey
                            </div>
                        </div>
                        <div className="testimonials-header-right">
                            <div className="testimonial-button">
                                <div className="button-individuals">
                                    <div className="button-text">For Individuals</div>
                                </div>
                                <div className="button-businesses">
                                    <div className="button-text">For Businesses</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonials-content">
                        <div className="testimonials-navigation">
                            <img src={leftArrow} alt="" />
                        </div>
                        <div className="testimonials-cards">
                            <div className="testimonial-card">
                                <div className="card-top">
                                    <div className="line"></div>
                                    <img src={TestimonialsIcon} alt="" />
                                    <div className="line"></div>
                                </div>
                                <div className="card-content">
                                    YourBank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze.
                                </div>
                                <div className="card-author">
                                    Sara T
                                </div>
                            </div>
                            <div className="testimonial-card">
                                <div className="card-top">
                                    <div className="line"></div>
                                    <img src={TestimonialsIcon} alt="" />
                                    <div className="line"></div>
                                </div>
                                <div className="card-content">
                                    I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.
                                </div>
                                <div className="card-author">
                                    John D
                                </div>
                            </div>
                            <div className="testimonial-card">
                                <div className="card-top">
                                    <div className="line"></div>
                                    <img src={TestimonialsIcon} alt="" />
                                    <div className="line"></div>
                                </div>
                                <div className="card-content">
                                    I love the convenience of YourBank's mobile banking app. It allows me to stay on top of my finances and make transactions on the go. The app is user-friendly and secure, giving me peace of mind.
                                </div>
                                <div className="card-author">
                                    Emily G
                                </div>
                            </div>
                            <div className="testimonial-gradient-left"></div>
                            <div className="testimonial-gradient-right"></div>
                        </div>
                        <div className="testimonials-navigation">
                            <img src={rightArrow} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Testimonials;
