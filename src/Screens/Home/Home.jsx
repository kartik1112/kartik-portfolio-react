// eslint-disable-next-line no-unused-vars
import React from 'react'
import './styles.css'
import Navbar from '../../Components/Navbar/Navbar'
import Intro from '../../Components/IntroductionDiv/Intro'
import Footer from '../../Components/Footer/Footer'
const Home = () => {
  return (
    <div className='home-container'>
      <Navbar/>
      <Intro/>
      <Footer/>
    </div>
  )
}

export default Home
