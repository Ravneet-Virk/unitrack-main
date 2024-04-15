import React from 'react'
import { country } from './CountryPageInfo'
import { useParams } from 'react-router-dom'
import Hero from './Components/Hero/Hero';

const CountryPage = () => {

    const { id } = useParams();
    const Country = country.find((Country) =>
        Country.title === id);

    return (
        <div>
            <Hero h1="Tjfklf" />
            <div className="container">
                
            </div>
        </div>
    )
}

export default CountryPage
