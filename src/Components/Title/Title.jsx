import React from 'react'
import "./Title.css"

const Title = ({subTitle, Title}) => {
    return (
        <div className='title' data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1000">
            <p>{subTitle}</p>
            <h2>{Title}</h2>
        </div>
    )
}

export default Title
 