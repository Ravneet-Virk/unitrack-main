import React, { useState } from 'react'
import './SingleAccordian.css'

const SingleAccordian = ({ question, answer }) => {

    const [show, setShow] = useState(false);

    return (
        <div className="Inner-Box"  >

            <div className="question-section">
                {show ? <img onClick={() => { setShow(!show) }} src='./images/Up.gif' alt='image' className='faq-Icon' /> : <img onClick={() => { setShow(!show) }} src='./images/Down.gif' alt='image' className='faq-Icon' />}

                <h3>{question}</h3>
            </div>

            {
                show && <div className="answer-section">
                    <p>{answer}</p>
                </div>
            }
        </div>
    )
}

export default SingleAccordian
