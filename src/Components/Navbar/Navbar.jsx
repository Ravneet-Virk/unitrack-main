import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <NavLink to="/">
        <img src="./images/Logo-OG.png" alt="Logo" className='Logo' data-aos="fade-right"
            data-aos-duration="1000"/>
      </NavLink>
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'} >
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/service">Service</NavLink>
        </li>
        <li>
          <NavLink to="/Faq">FAQ</NavLink>
        </li>
        <li>
          <NavLink to="/Blog">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/contact"><button className='btn' data-aos="zoom-in" data-aos-duration="1000">Contact Us</button></NavLink>
        </li>
      </ul>
      <img src='./images/align-left.png' alt='image' className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
