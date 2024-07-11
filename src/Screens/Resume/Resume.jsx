import React from 'react'
import './Resume.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

const Resume = () => {
    return (
        <div className='resume'>
            <Navbar/>
            {/* sdn */}
            <object

                data='public\assets\KartikButtan_2021PUSCEBADX09829.pdf'
                type='application/pdf'
                title='Resume'
            >
            </object>
            <Footer/>
        </div>
    )
}

export default Resume

