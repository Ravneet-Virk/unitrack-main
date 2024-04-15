import React from 'react'
import './AustraliaReason.css'

const AustraliaReason = ({heading, Para}) => {
  return (
    <div className="Reason-box">
        <h2 className='country-h2'>{heading}</h2>
        <p>{Para}</p>
    </div>
  )
}

export default AustraliaReason
