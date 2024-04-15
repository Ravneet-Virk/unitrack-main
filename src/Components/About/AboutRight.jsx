import React from 'react'
import './AboutRight.css'

const AboutRight = ({ sTitle, bTitle, p1, p2, source }) => {
    return (
        <div className='about'>

            <div className="about-right" data-aos="fade-right" data-aos-duration="1000">
                <h3>{sTitle}</h3>
                <h2>{bTitle}</h2>
                <p>{p1}</p>
                <p>{p2}</p>
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolor, distinctio similique illo fuga necessitatibus pariatur, illum reiciendis consectetur atque a exercitationem, modi minus?</p> */}
            </div>

            <div className="about-left" data-aos="fade-left" data-aos-duration="1000">
                <img src={`${source}`} alt="aboutImage" className='about-img' />
                {/* <img src="./images/play-icon.png" alt="playImage" className='play-img' /> */}
            </div>
        </div>
    )
}

export default AboutRight
