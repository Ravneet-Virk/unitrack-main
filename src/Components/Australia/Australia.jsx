import React, { useState } from 'react'
import './Australia.css'
import AustraliaReason from './AustraliaReason'
import { list } from "./ReasonApi"

const Australia = () => {

    const [data, SetData] = useState(list);

    return (
        <div className="Australia-Big-Box">
            <div className="Para">
                <h1>Study in <span className='choose-heading'>Australia</span>?</h1>
                <p><b>Study in Australia</b> or study abroad, it is important to consider the quality of life you can expect while living in another country. If you are considering studying in Australia, <span className='choose-heading'>a study visa consultant in Ludhiana</span> can provide you with valuable advice on how to make the most of your time there. From Affordability to safety, our consultants can help guide you through every aspect of studying in Australia.</p>
                <p>Ranking third in the list of most popular overseas education destination for international students, Australia offers high quality education at an affordable range of tuition fees. Known for globally recognised programs, cultural diversity, friendly natives and a high standard of living, Australia is one of the most sought destination for students across the world.</p>
            </div>
            {data.map((obj) => {
                return <AustraliaReason key={obj.id} {...obj}/>
            })}
            {/* <AustraliaReason h2="abc" p="loremsjdnbgvkgjdbvkjsdb"/> */}
        </div>
    )
}

export default Australia
