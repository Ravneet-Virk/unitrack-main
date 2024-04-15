import React from 'react'
import './ListSection.css'

const ListSection = () => {
    return (
        <div className='List-container'>
            <h2>List Of Universities in Australia</h2>
            <div className="container">
                <div className="List-Row">
                    <div className="list-column">
                        <ul>
                            <li><img className='blt' src='./images/blt.png' alt='' /><h3>Swinburne University of Technology</h3></li>
                            <li><img className='blt' src='./images/blt.png' alt='' /><h3>University of Newcastle</h3></li>
                            <li><img className='blt' src='./images/blt.png' alt='' /><h3>University of Tasmania</h3></li>
                            <li><img className='blt' src='./images/blt.png' alt='' /><h3>Murdoch University</h3></li>
                            <li><img className='blt' src='./images/blt.png' alt='' /><h3>Bond University</h3></li>
                        </ul>
                    </div>
                    <div className="list-column">
                        <ul>
                            <li><img className='blt' src='./images/blt.png' alt='' /><h3>James cook University</h3></li>
                            <li><img className='blt' src='./images/blt.png' alt='' /><h3>Edith Cowan University</h3></li>
                            <li><img className='blt' src='./images/blt.png' alt='' /><h3>University of Notre Dame</h3></li>
                            <li><img className='blt' src='./images/blt.png' alt='' /><h3>TAFE Sa</h3></li>
                            <li><img className='blt' src='./images/blt.png' alt='' /><h3>University of Southern Queensland</h3></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListSection
