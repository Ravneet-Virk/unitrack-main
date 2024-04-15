import React, { useRef } from 'react'
import "./Testimonials.css"

const Testimonials = () => {

const slider = useRef();
let tx = 0;

const handleNext = () => {
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
}
const handleBack = () => {
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
}

    return (
        <div className='testimonials'>
            <img src="./images/next-icon.png" alt="" className='next-btn' onClick={handleNext}/>
            <img src="./images/back-icon.png" alt="" className='back-btn' onClick={handleBack}/>
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src="./images/u1.png"/>
                                <div>
                                    <h3>Himanshu Dewgan</h3>
                                    <span>Unitrack, India</span>
                                </div>
                            </div>
                            <p>I am extremely satisfied with the services provided by Unitrack Global. Their guidance and support throughout the entire process of obtaining my study visa for Australia were invaluable. I highly recommend their services to anyone seeking assistance with their study abroad plans.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src="./images/u2.png"/>
                                <div>
                                    <h3>Kritika Goyal</h3>
                                    <span>Unitrack, India</span>
                                </div>
                            </div>
                            <p>Thanks to Unitrack Global, I was able to fulfill my dream of studying in Australia. Their team of experts made the visa application process smooth and stress-free. I am grateful for their professionalism and dedication.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src="./images/u3.png"/>
                                <div>
                                    <h3>Sukhdeep Gill</h3>
                                    <span>Unitrack, India</span>
                                </div>
                            </div>
                            <p>Unitrack Global made me feel confident about studying abroad. They were professional, friendly, and made sure I had all the information I needed. I highly recommend their services to anyone thinking about studying in Australia.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src="./images/u4.png"/>
                                <div>
                                    <h3>Abhinav Jain</h3>
                                    <span>Unitrack, India</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, velit unde dolores facilis quia ut, quod minima, molestias perspiciatis ab ipsam deserunt doloribus debitis cupiditate!</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonials
