import React from 'react'

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="about-footer">
                            <div className="section-title">
                                <h2 className="text-anime-style-2" data-cursor="-opaque">
                                    We're here when you're ready
                                </h2>
                            </div>

                            <div className="footer-contact-box">
                                <p>
                                    Feel free to reach out for any assistance or inquiries. Our
                                    team is ready to help you take the next step.
                                </p>
                                <div className="footer-contact-item">
                                    <p>Call Us :</p>
                                    <a href="tel:0450020940"> 0450 020 940</a>
                                </div>

                                <div className="footer-contact-item">
                                    <p>Email Us :</p>
                                    <a href="mailto:admin@achievespeech.info"
                                    >admin@achievespeech.info</a>
                                </div>

                                <div className="footer-contact-item">
                                    <p>Location :</p>
                                    <p>Greenacre, NSW</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="footer-quick-links">
                            <div className="section-title">
                                <h2 className="text-anime-style-2" data-cursor="-opaque">
                                    Quick Links
                                </h2>
                            </div>
                            <div className="footer-menu">
                                <ul>
                                    <li><a href="index-2">home</a></li>
                                    <li><a href="about">about us</a></li>
                                    <li><a href="services">services</a></li>
                                    <li><a href="resources">resources</a></li>
                                    <li><a href="blog">blog</a></li>
                                    <li><a href="contact">contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="section-title">
                            <h2 className="text-anime-style-2" data-cursor="-opaque">
                                Join our Community
                            </h2>
                        </div>

                        <div className="footer-social-links">
                            <p>Join Us Today for Resources, Insight & Connection</p>

                            <div className="newsletter">
                                <form className="newsletter-form">
                                    <div className="input-container">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            required
                                            className="newsletter-input"
                                        />
                                        <button type="submit" className="arrow-btn">
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <ul>
                                <li>
                                    <a href="#"><i className="fa-brands fa-pinterest-p"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="footer-copyright-text">
                                <p>
                                    Copyright © Paradise Tours & Travel&nbsp;
                                    {new Date().getFullYear()}
                                    . All rights reserved.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="footer-design-text">
                                <p>
                                    Designed & Developed by
                                    <a
                                        href="https://www.murphystechnology.com.au/"
                                        target="_blank"
                                    > Murphys Technology Pty Ltd</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
