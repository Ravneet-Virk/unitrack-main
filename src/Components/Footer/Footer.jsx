import React from 'react'
import './Footer.css'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer">
            <div className="header-container">
                <div className="row">
                    <div className="footer-col-1">
                        {/* <h3>Download Our App</h3>
                        <p>Download App for Android and IOS Mobile Phone</p>
                        <div className="app-logo">
                            <img src="Images/play-store.png" />
                            <img src="Images/app-store.png" />
                        </div> */}
                        <img src="./images/Logo-OG.png" alt='' />
                    </div>
                    <div className="footer-col-2">
                        {/* <img src="Images/logo-white.png" /> */}
                        <p>Ready to explore global opportunities? Our team of experts is here to guide you. Complete the form below to start your journey towards studying abroad</p>
                    </div>
                    <div className="footer-col-3">
                        <h3>Navigation Links</h3>
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/service">Service</NavLink></li>
                            <li><NavLink to="/contact">Contact Us</NavLink></li>
                        </ul>
                    </div>
                    <div className="footer-col-4">
                        <h3>Follow Us</h3>
                        <ul>
                            <li><a href='https://www.facebook.com/share/MgczxNwwe4idpjmE/?mibextid=qi2Omg'>Facebook</a></li>
                            <li><a href='https://www.instagram.com/unitrackglobal?igsh=MWVka2dzb2hjcDBmag=='>Instagram</a></li>
                            <li><a href='https://youtube.com/@unitrackglobal1263?si=iMx-8lPXtqpUmCZU'>Youtube</a></li>
                            <li><a href='https://x.com/UnitrackGlobal?t=puR3Zo-fExwlecjZDLK6yA&s=09'>Twitter</a></li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p className="copyright">Copyright 2024 - Unitrack Global</p>
            </div>
        </div>
    )
}

export default Footer
