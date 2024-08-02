import React from "react";
import './Questions.css'
import DownArrow from "../Assets/DownArrow.png"

function Questions() {
    return (
        <div className="container">
            <div style={{ height: 810, marginTop: "120px" }}>

                <div className="questions-section">
                    <div className="questions-header">
                        <div className="questions-title">
                            <span className="questions-title-main">Frequently</span>
                            <span className="questions-title-highlight"> Asked Questions</span>
                        </div>
                        <div className="questions-subtitle">
                            Still you have any questions? Contact our Team via support@yourbank.com
                        </div>
                    </div>
                    <div className="questions-content">
                        <div className="questions-list">
                            <div className="question-box">
                                <div className="question-title">How do I open an account with YourBank?</div>
                                <div className="question-divider"></div>
                                <div className="question-text">
                                    Opening an account with YourBank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.
                                </div>
                            </div>
                            <div className="question-box">
                                <div className="question-title">What documents do I need to provide to apply for a loan?</div>
                                <div className="question-divider"></div>
                                <div className="question-text">
                                    The documents required for a loan application may vary depending on the type of loan you are applying for. Generally, you will need to provide identification documents (such as a passport or driver's license), proof of income (such as pay stubs or tax returns), and information about the collateral (if applicable). Our loan officers will guide you through the specific requirements during the application process.
                                </div>
                            </div>
                        </div>
                        <div className="questions-list">
                            <div className="question-box">
                                <div className="question-title">How can I access my accounts online?</div>
                                <div className="question-divider"></div>
                                <div className="question-text">
                                    Accessing your accounts online is simple and secure. Visit our website and click on the "Login" button. Enter your username and password to access your accounts. If you haven't registered for online banking, click on the "Enroll Now" button and follow the registration process. If you need assistance, our customer support team is available to guide you.
                                </div>
                            </div>
                            <div className="question-box">
                                <div className="question-title">Are my transactions and personal information secure?</div>
                                <div className="question-divider"></div>
                                <div className="question-text">
                                    At YourBank, we prioritize the security of your transactions and personal information. We employ industry-leading encryption and multi-factor authentication to ensure that your data is protected. Additionally, we regularly update our security measures to stay ahead of emerging threats. You can bank with confidence knowing that we have robust security systems in place.
                                </div>
                            </div>
                        </div>
                        <div className="gradient-overlay"></div>
                        <div className="load-all-faqs">
                            <div className="load-all-faqs-text">Load All FAQ’s </div>
                            <img src={DownArrow} alt="" />


                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Questions;
