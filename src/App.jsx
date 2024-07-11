/* eslint-disable no-unused-vars */
import React from 'react'
import Home from './Screens/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Project from './Screens/Projects/Project'
import Blogs from './Screens/Blogs/Blogs'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Project />} />
        <Route path='/resume' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/contact' element={<Home />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
