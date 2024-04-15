import React from 'react'
import "./Offer.css"

const Offer = () => {
  return (
    <div className='cont'>
        <div className="card-container">

            <article className="card-article">
                <img src="./images/service-1.png" alt="image" className='card-image'/>

                <div className="card-data">
                    <span className='card-description'>Providing guidance on study options, eligibility criteria, and requirements for studying in various countries.</span>
                    <h2 className='card-title'>Consultation and Assessment</h2>
                    {/* <a href='#' className='card-button'>Read more</a> */}
                </div>
            </article>

            <article className="card-article">
                <img src="./images/service-2.png" alt="image" className='card-image'/>

                <div className="card-data">
                    <span className='card-description'>Offering guidance and tips for visa interviews, including mock interviews to help applicants prepare for potential questions and scenarios.</span>
                    <h2 className='card-title'>Interview Preparation</h2>
                    {/* <a href='#' className='card-button'>Read more</a> */}
                </div>
            </article>

            <article className="card-article">
                <img src="./images/service-3.png" alt="image" className='card-image'/>

                <div className="card-data">
                    <span className='card-description'>Providing assistance with post-visa services such as travel arrangements, accommodation, and orientation programs for students upon arrival in the destination country.</span>
                    <h2 className='card-title'>Post-Visa Services</h2>
                    {/* <a href='#' className='card-button'>Read more</a> */}
                </div>
            </article>

        </div>
    </div>
  )
}

export default Offer
