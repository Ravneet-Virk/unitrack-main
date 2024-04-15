import React from 'react'
import "./ServicesWWO.css"

const ServicesWWO = () => {
  return (
    <div className='programs'  data-aos="zoom-out-up"
    data-aos-duration="1000" >
      <div className="program">
        <img src="./images/s1.png" alt="Image" />
        <div className="caption">
          {/* <img src="./images/icon-1.png" alt="Image" /> */}
          <p>Consultation and Assessment</p>
        </div>
      </div>
      <div className="program">
        <img src="./images/s2.png" alt="Image" />
        <div className="caption">
          {/* <img src="./images/icon-2.png" alt="Image" /> */}
          <p>Application Assistance</p>
        </div>
      </div>
      <div className="program" >
        <img src="./images/s3.png" alt="Image" />
        <div className="caption">
          {/* <img src="./images/icon-3.png" alt="Image" /> */}
          <p>University Selection</p>
        </div>
      </div>
      <div className="program" >
        <img src="./images/s4.png" alt="Image" />
        <div className="caption">
          {/* <img src="./images/icon-3.png" alt="Image" /> */}
          <p>Financial guidance</p>
        </div>
      </div>
      <div className="program" >
        <img src="./images/s5.png" alt="Image" />
        <div className="caption">
          {/* <img src="./images/icon-3.png" alt="Image" /> */}
          <p>Pre-departure support</p>
        </div>
      </div>
  
    </div>
  )
}

export default ServicesWWO
