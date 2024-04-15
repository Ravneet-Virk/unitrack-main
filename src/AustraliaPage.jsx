import React, { useState } from 'react'
import Australia from './Components/Australia/Australia'
import Hero from './Components/Hero/Hero'
import ListSection from './Components/Australia/ListSection'

const AustraliaPage = () => {

    // const [data, setData] = useState(Course);

    return (
        <div>
            <Hero h1="Australia" h2="" para="" />
            <div className="container">
                <Australia />
            </div>
            <ListSection />
            <div className="container">
                {/* <h1>Courses Avaliable</h1> */}
                <div className="List-Row">
                    <div className="list-column">
                        <h2 className='country-h2'>Bachelor’ Courses</h2>
                        <ul>
                            <li>Bachelor of Business</li>
                            <li>Bachelor of Commerce</li>
                            <li>Bachelor of Law/ Bachelor of Computer Science</li>
                            <li>Bachelor of Business Analysis and Analytics</li>
                            <li>Bachelor of Information Technology</li>
                            <li>Bachelor of Health Science</li>
                            <li>Bachelor of Social Science</li>
                            <li>Bachelor of Nursing</li>
                        </ul>
                    </div>
                    <div className="list-column">
                        <h2 className='country-h2'>Master’s course</h2>
                        <ul>
                            <li>Master of Information Technology & Cyber Security</li>
                            <li>Master of Professional Accounting</li>
                            <li>Master of Environmental Science</li>
                            <li>Master of Business Administration</li>
                            <li>Master of public Health</li>
                            <li>Master of Computer science</li>
                            <li>Master of Data Science</li>

                        </ul>
                    </div>
                </div>


            </div>
        </div >
    )
}

export default AustraliaPage
