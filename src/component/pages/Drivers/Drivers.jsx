import React from 'react'

import './Drivers.css'

import Driver1 from '../../Assets/Drivers/driver1.png'
import Driver2 from '../../Assets/Drivers/driver2.png'
import Driver3 from '../../Assets/Drivers/driver3.png'
import Driver4 from '../../Assets/Drivers/driver4.png'
import Driver5 from '../../Assets/Drivers/driver5.png'

const Featured = () => {
    return (
        <div className='featured' id='featured'>
            <h1 className='featured-text'>OUR RACERS</h1>
            <p className='featured-text'>The team was founded by Sri Lankan racing driver, </p>
            <div className='container'>
                <img className='span-3 image-grid-row-2' src={Driver1} alt='' />
                <img src={Driver2} alt='' />
                <img src={Driver3} alt='' />
                <img src={Driver4} alt='' />
                <img src={Driver5} alt='' />           
            </div>

        
        </div>
    )
}

export default Featured