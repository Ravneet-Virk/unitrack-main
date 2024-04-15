import React from 'react'
import './Choose.css'
import { NavLink } from 'react-router-dom'

const Choose = () => {
    return (
        <div className="choose-outer" data-aos="fade-up"
        data-aos-duration="2000">
            <p>Are you dreaming of pursuing higher education in Australia? Look no further! Unitrack Global is your trusted partner in turning your dreams into reality. As a leading consultancy company, we specialize in providing comprehensive assistance to students aspiring to study in Australia.</p>
            <h2>We Provide</h2>
            <ul >
                <li>
                    <span className='choose-heading'>Expert Guidance:</span> Our team of visa consultants brings extensive knowledge and expertise in visa regulations, procedures, and documentation requirements for various countries around the world.
                </li>
                <li>
                    <span className='choose-heading'>Personalized Service:</span> We understand that every individual's visa needs are different. That's why we take the time to listen to your specific requirements and tailor our services to meet your unique circumstances and objectives.
                </li>
                <li>
                    <span className='choose-heading'>Comprehensive Support:</span> From initial consultation to visa application submission and follow-up, we provide end-to-end support to ensure a seamless experience for our clients. We handle all aspects of the visa process, saving you time, effort, and frustration.
                </li>
                <li>
                    <span className='choose-heading'>Timely Updates:</span> We keep you informed at every stage of the visa application process, providing timely updates on the status of your application and addressing any questions or concerns you may have along the way.
                </li>
                <li>
                    <span className='choose-heading'>Ethical Practices:</span> Integrity and professionalism are at the core of our business values. We adhere to the highest ethical standards in all our interactions with clients, ensuring transparency, honesty, and confidentiality at all times.
                </li>
                <li>
                    <span className='choose-heading'>Hassle-Free Process:</span> We understand that navigating the complexities of international education can be daunting. That's why we strive to make the visa application process as smooth and hassle-free as possible for our clients. With our guidance and support, you can pursue your academic dreams confidently.
                </li>
                <li>
                    <span className='choose-heading'>Proven Track Record:</span> Join the countless students who have entrusted Unitrack Global to navigate the complexities of international education. Our track record of success speaks for itself, with numerous students achieving their academic goals with our assistance.
                </li>
            </ul>
            <NavLink to="/about"><button className='btn read-more-btn' data-aos="zoom-in" data-aos-duration="1000">Read More &rarr;</button></NavLink>
        </div>
    )
}

export default Choose
