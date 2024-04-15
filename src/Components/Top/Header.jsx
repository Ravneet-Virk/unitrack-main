import React from 'react'
import './Header.css'
// import image from '../../assets/s1-Consultation.png'
// import image1 from '../../assets/Logo-Unitrack.png'

const Header = () => {
    return (
        <div className="header">
            <div className="header-container">
                <div className="row">
                    <div className="col-2">
                        <h1>About - Unitrack <br />Global Immigration</h1>
                        <p>Things may come to those who wait, but only the things left<br /> by those who hustle.</p>
                        {/* <a href="" className="btn">Explore Now &#8594;</a> */}
                    </div>
                    <div className="col-2">
                        <img src='./images/s1.png' alt="Image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
