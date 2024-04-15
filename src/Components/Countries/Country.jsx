import React, { useState } from 'react'
import './Country.css'
import { countries } from './Country-Api'
import CountryInner from './CountryInner'

const Country = () => {

    const [data, SetData] = useState(countries);

    return (
        <div className='Country-Box' data-aos="zoom-out-up"
        data-aos-duration="1000">
            {data.map((list) => {
                return <CountryInner key={list.id} {...list} />;
            })}
        </div>
    )
}

export default Country
