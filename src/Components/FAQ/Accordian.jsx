import React, { useState } from 'react'
import './Accordian.css'
import { questions } from './Api'
import SingleAccordian from './SingleAccordian';

const Accordian = () => {

    const [data, setData] = useState(questions);

    return (
        <div className='Outer-Box' data-aos="fade-right" data-aos-duration="1500">
            {data.map((list) => {
                return <SingleAccordian key={list.id} {...list} />;
            })}
        </div>
    )
}

export default Accordian
