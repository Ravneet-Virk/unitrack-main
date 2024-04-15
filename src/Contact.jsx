import React from 'react'
import Hero from './Components/Hero/Hero'
import ContactForm from './Components/Contact/ContactForm'
import Title from './Components/Title/Title'
import Map from './Components/Map/Map'

const Contact = () => {
  return (
    <div>
      <Hero h1="Contact Us" />
      <div className="container">
        <Title subTitle="Contact US" Title="Get in touch" />
        <ContactForm />
        <Title subTitle="Find Us" Title="Get in touch" />
        <Map/>
      </div>
    </div>
  )
}

export default Contact
