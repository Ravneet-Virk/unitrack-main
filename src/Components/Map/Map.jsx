import React from 'react'
import './Map.css'

const Map = () => {
    return (
        <div className="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3424.044343868604!2d75.82980177542478!3d30.88542047451098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a839b6644cc97%3A0x50dfcaec1a86d77e!2sUnitrack%20Global!5e0!3m2!1sen!2sin!4v1711561229920!5m2!1sen!2sin" width="100%" height="100%" style={{ border: "0" }} allowFullScreen='' loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default Map
