import React from 'react'
import videoBg from '../../assets/video.webm'
import './Main.css'

const Main = () => {
    return (
        <div className="main" data-aos="fade-down"
            data-aos-duration="1000">
            <div className="overlay"></div>
            <video src={videoBg} autoPlay loop muted />
            <div className="content">
                <h1>Unitrack Global</h1>
                <h2>Best Study Visa Consultant In <span className='red-span'>Ludhiana</span><br />Your Trusted Partner For Study Abroad Visa Services</h2>
            </div>
        </div>
    )
}

export default Main
