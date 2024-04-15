import React from 'react'
import Hero from './Components/Hero/Hero'
import Title from './Components/Title/Title'
import AboutComp from './Components/About/AboutComp'
import Choose from './Components/ChooseUs/Choose'
// import Header from './Components/Top/Header'

const About = () => {
  return (
    <div>
      <Hero h1="ABOUT US" h2="" para="" />
      {/* <Header/> */}
      <div className="container">

        <Title subTitle="About Us" Title="Who we are" />
        <AboutComp bTitle="Who We are" p1="Welcome to Unitrack Global, your trusted partner in navigating the complexities of international education and study visas.

        At Unitrack Global, we understand that pursuing education abroad is a life-changing decision, filled with excitement and challenges. That's why we're dedicated to providing unparalleled support and guidance to students and professionals aspiring to study overseas.

        With years of experience and a team of seasoned professionals, we offer comprehensive services tailored to meet the unique needs of each client. From selecting the right academic institution and program to preparing visa applications and ensuring compliance with immigration requirements, we're with you every step of the way."
          p2="Our commitment to excellence extends beyond mere assistance – we strive to empower our clients with knowledge, resources, and confidence to embark on their educational journey with peace of mind.

        Whether you're a prospective student, a working professional seeking to advance your skills, or an institution looking to collaborate, Unitrack Global is here to make your dreams of international education a reality." source="./images/about.png" />
        <Title subTitle="Who we are" Title="Why Choose Us?" />
        <Choose />
      </div>
    </div>
  )
}

export default About
