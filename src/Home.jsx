import React from 'react'
// import Hero from './Components/Hero/Hero'
import ServicesWWO from './Components/Services/ServicesWWO'
import Title from './Components/Title/Title'
import AboutComp from './Components/About/AboutComp'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import ContactForm from './Components/Contact/ContactForm'
import Main from './Components/Main/Main'
import Country from './Components/Countries/Country'
import Choose from './Components/ChooseUs/Choose'
// import Offer from './Components/Offer/Offer'

const Home = () => {
  return (
    <div>

        <Main />
        {/* <Hero h1="Unitrack Global" h2="Your Immigration Portal" para="Welcome to Unitrack Global, your go-to destination for immigration solutions. Whether you're relocating, studying abroad, or reuniting with family, we provide the resources and support you need." /> */}

        <div className="container">
        <AboutComp sTitle="ABOUT UNITRACK GLOBAL" bTitle="EMPOWERING DREAMS, NAVIGATING FUTURES" p1="Welcome to Unitrack Global, your trusted partner in navigating the complexities of international education and visa application processes. From 15+ years, we are dedicated to assisting aspiring students in realizing their dreams of studying abroad." p2="At Unitrack Global, we understand that pursuing education in a foreign country can be both exciting and daunting. With years of experience and a team of knowledgeable experts, we provide comprehensive support and guidance to students throughout every step of the study visa application journey." source="./images/about.png" />
        <Title subTitle="Who we are" Title="Why Choose Us?" />
        <Choose />
        <Title subTitle="Our Services" Title="What We Offer" />
        {/* <Offer /> */}
        <ServicesWWO />
        
        <Title subTitle="Countries" Title="Where We Deal" />
        <Country />
        {/* <Campus /> */}
        <Title subTitle="Testimonials" Title="What Students Says" />
        <Testimonials />
        <Title subTitle="Contact US" Title="Get in touch" />
        <ContactForm />
      </div>
    </div>
  )
}

export default Home
