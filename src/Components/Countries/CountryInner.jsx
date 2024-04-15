import React from 'react';
import './CountryInner.css';
import { Link, NavLink } from 'react-router-dom';

const CountryInner = ({ image, content, name, nav }) => {
  return (
    <div className='Country-Inner'>
      <img src={image} alt='Image' />
      <h3>{name}</h3>
      <p>{content}</p>
      {/* <Link to={`/country/${name}`}><button className='country-btn'>Explore More &rarr;</button></Link> */}
      <Link to={`/${nav}`}><button className='country-btn'>Explore More &rarr;</button></Link>
    </div >
  )
}

export default CountryInner
