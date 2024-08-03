// eslint-disable-next-line no-unused-vars
import React from 'react'
import './styles.css'
import Intro from '../../Components/IntroductionDiv/Intro'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import SkillsSidebar from '../../Components/SkillsSidebar/SkillsSidebar'
import Project from '../Projects/Project'
import Resume from '../Resume/Resume'
import Blogs from '../Blogs/Blogs'
const Home = () => {
  return (
    <div className='home-container'>
      <Navbar />
      <div className='home-content'>
        <Intro />
        <SkillsSidebar />
      </div>
      <hr className='horizontal-divider' />
      <div style={{margin:"-15px"}}></div>
      <Project ></Project>
      <div style={{margin:"30px"}}></div>
      <hr className='horizontal-divider'/>
      <div style={{margin:"-22px"}}></div>
      <Resume></Resume>
      <hr className='horizontal-divider'/>
      <div style={{margin:"-35px"}}></div>
      <Blogs></Blogs>
      <Footer />
    </div>
  )
}

export default Home
