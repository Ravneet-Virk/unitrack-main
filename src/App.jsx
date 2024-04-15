import React from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Service from './Service'
import Faq from './FaqPage'
import BlogPage from './BlogPage'
import AustraliaPage from './AustraliaPage'
import UKPage from './UKPage'
import NZPage from './NZPage'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import CountryPage from './CountryPage'
import Icon from './Components/Icon/Icon'



// import footer from './Components/Footer/Footer'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/Faq' element={<Faq />} />
        <Route path='/Blog' element={<BlogPage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/Australia' element={<AustraliaPage />} />
        <Route path='/UK' element={<UKPage />} />
        <Route path='/NZ' element={<NZPage />} />
        <Route path='/country/:id' element={<CountryPage />} />
      </Routes>
      <Icon />
      <Footer />
    </BrowserRouter>
  )
}

export default App
