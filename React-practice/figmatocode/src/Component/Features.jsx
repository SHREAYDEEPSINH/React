import React from "react";
import './Features.css'
import arrowIcon from "../Assets/featuresIconArrow.png"

function Features() {
    return (
        <div className="container">
            <div style={{ height: "650px", marginTop: "120px" }}>
            

                <div className="features-section">
                    <div className="features-header">
                        <div className="features-title">
                            <span className="features-title-part1">Our</span>
                            <span className="features-title-part2">Features</span>
                        </div>
                        <div className="features-description">
                            Experience a host of powerful features at YourBank, including
                            seamless online banking, secure transactions, and personalized
                            financial insights, all designed to enhance your banking
                            experience
                        </div>
                    </div>
                    <div className="features-list">
                        <div className="feature-category">
                            <div className="feature-category-item">
                                <div className="feature-category-item-title">
                                    <div className="feature-category-item-text">Online Banking</div>
                                </div>
                            </div>
                            <div className="feature-category-item">
                                <div className="feature-category-item-title">
                                    <div className="feature-category-item-text">Financial Tools</div>
                                </div>
                            </div>
                            <div className="feature-category-item">
                                <div className="feature-category-item-title">
                                    <div className="feature-category-item-text">Customer Support</div>
                                </div>
                            </div>
                        </div>
                        <div className="feature-details">
                            <div className="feature-details-row">
                                <div className="feature-details-item">
                                    <div className="feature-details-item-header">
                                        <div className="feature-details-item-title">24/7 Account Access</div>
                                        <img src={arrowIcon} alt="" />
                                    </div>
                                    <div className="feature-details-item-description">
                                        Enjoy the convenience of accessing your accounts anytime,
                                        anywhere through our secure online banking platform. Check
                                        balances, transfer funds, and pay bills with ease.
                                    </div>
                                </div>
                                <div className="feature-details-item">
                                    <div className="feature-details-item-header">
                                        <div className="feature-details-item-title">Mobile Banking App</div>
                                        <img src={arrowIcon} alt="" />

                                    </div>
                                    <div className="feature-details-item-description">
                                        Stay connected to your finances on the go with our
                                        user-friendly mobile banking app. Easily manage your
                                        accounts, deposit checks, and make payments from your
                                        smartphone or tablet.
                                    </div>
                                </div>
                            </div>
                            <div className="feature-details-row">
                                <div className="feature-details-item">
                                    <div className="feature-details-item-header">
                                        <div className="feature-details-item-title">Secure Transactions</div>
                                        <img src={arrowIcon} alt="" />

                                    </div>
                                    <div className="feature-details-item-description">
                                        Rest assured knowing that your transactions are protected by
                                        industry-leading security measures. We employ encryption and
                                        multi-factor authentication to safeguard your financial
                                        information.
                                    </div>
                                </div>
                                <div className="feature-details-item">
                                    <div className="feature-details-item-header">
                                        <div className="feature-details-item-title">Bill Pay and Transfers</div>
                                        <img src={arrowIcon} alt="" />

                                    </div>
                                    <div className="feature-details-item-description">
                                        Save time and avoid late fees with our convenient bill pay
                                        service. Set up recurring payments or make one-time
                                        transfers between your accounts with just a few clicks.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Features;
