import React from 'react'
import './Resume.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

const Resume = () => {
    return (
        <div className='resume'>
            <Navbar/>
            {/* sdn */}
            {/* <embed
                data='https://drive.google.com/file/d/1Ngn6a_WCh6p6j0qeP7YlDEFNgLoiEKlj/'
                type='application/pdf'
                title='Resume'
            >
            </embed> */}
            <iframe src="https://drive.google.com/file/d/1Ngn6a_WCh6p6j0qeP7YlDEFNgLoiEKlj/preview" height={'100%'} allow="autoplay"></iframe>
            <Footer/>
        </div>
    )
}

export default Resume

