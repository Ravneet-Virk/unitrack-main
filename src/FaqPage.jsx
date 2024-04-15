import React from 'react'
import Accordian from './Components/FAQ/Accordian'
import Hero from './Components/Hero/Hero'
import Title from './Components/Title/Title'

const Faq = () => {
  return (
    <div>
      <Hero h1="FAQ'S" />
      <div className='container'>
        <Title subTitle="FAQ" Title="Here are the answers" />
        <Accordian />
      </div>
    </div>
  )
}

export default Faq
