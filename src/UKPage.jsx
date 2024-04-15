import React, { useState } from 'react'
import Hero from './Components/Hero/Hero'
import { UkList } from './Components/Australia/ReasonApi'
import AustraliaReason from './Components/Australia/AustraliaReason'

const UKPage = () => {

    const [data, SetData] = useState(UkList);

    return (
        <div>
            <Hero h1="United Kingdom" />
            <div className="container">
                <div className="Australia-Big-Box">
                    <div className="Para">
                        <h1>Study in <span className='choose-heading'>United Kingdom</span>?</h1>
                        <p><b>Studying in the UK</b> is an amazing opportunity packed with perks! Picture yourself in iconic cities like London, soaking up the vibrant culture while pursuing your education. The <span className='choose-heading'>universities here are top-notch</span>, offering a wide range of courses and cutting-edge research opportunities.</p>
                        <p>But it's not just about academics; studying in the UK is also about personal growth. You'll meet people from all walks of life, expanding your horizons and gaining a global perspective. Plus, with a degree from a UK university, you'll stand out to employers worldwide, giving you a competitive edge in the job market. So, if you're ready to embark on an unforgettable journey of learning, exploration, and professional development, the UK is the place to be!</p>
                    </div>
                    {data.map((obj) => {
                        return <AustraliaReason key={obj.id} {...obj} />
                    })}
                    {/* <AustraliaReason h2="abc" p="loremsjdnbgvkgjdbvkjsdb"/> */}
                </div>
            </div>

            <div className='List-container'>
                <h2>List Of Universities in United Kingdom</h2>
                <div className="container">
                    <div className="List-Row">
                        <div className="list-column">
                            <ul>
                                <li><img className='blt' src='./images/blt.png' alt='' /><h3>Birmingham City University</h3></li>
                                <li><img className='blt' src='./images/blt.png' alt='' /><h3>BPP University</h3></li>
                                <li><img className='blt' src='./images/blt.png' alt='' /><h3>Coventry University</h3></li>
                                <li><img className='blt' src='./images/blt.png' alt='' /><h3>Leeds Beckett University</h3></li>
                                <li><img className='blt' src='./images/blt.png' alt='' /><h3>London Metropolitan University</h3></li>
                                <li><img className='blt' src='./images/blt.png' alt='' /><h3>London South Bank University</h3></li>
                                <li><img className='blt' src='./images/blt.png' alt='' /><h3>University of Bradford</h3></li>
                                <li><img className='blt' src='./images/blt.png' alt='' /><h3>University of Bristol</h3></li>
                            </ul></div>
                        <div className="list-column">
                            <ul>
                                <li><img className='blt' src='./images/blt.png' alt='' /><h3>University of Derby</h3></li>
                                <li><img className='blt' src='./images/blt.png' alt='' /><h3>University of Essex</h3></li>
                                <li><img className='blt' src='./images/blt.png' alt='' /><h3>University of Glasgow</h3></li>
                                <li><img className='blt' src='./images/blt.png' alt='' /><h3>University of Suffolk</h3></li>
                                <li><img className='blt' src='./images/blt.png' alt='' /><h3>University of Hull</h3></li>
                                <li><img className='blt' src='./images/blt.png' alt='' /><h3>University of Stirling</h3></li>
                                <li><img className='blt' src='./images/blt.png' alt='' /><h3>University of Lincoln</h3></li>
                                <li><img className='blt' src='./images/blt.png' alt='' /><h3>University of Huddersfield</h3></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

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

export default UKPage
