import React from 'react'
import './Hero.css'

const Hero = ({h1, h2, para}) => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>{h1}<br />{h2}</h1>
        <p>{para}</p>
        {/* <p>Welcome to Unitrack Global, your go-to destination for immigration solutions. Whether you're relocating, studying abroad, or reuniting with family, we provide the resources and support you need. Explore our pathways, connect with others, and start your journey towards a brighter future today.</p> */}
        
        {/* <button className='btn'>Explore More &rarr;</button> */}
      </div>
    </div>
  )
}

export default Hero
