/* eslint-disable no-unused-vars */
import React from 'react'
import './navbar.css'
import { Link, Router } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="content">
                <h1 style={{
                    fontSize: '1.5rem',
                }}>KB.</h1>
                {/* <img width={60} src="assets/logo.svg" alt="" /> */}
                <div className='buttons-row'>
                    <Link to="/projects" className='button-navbar' >Projects</Link>
                    <Link to="/resume" className='button-navbar' >Resume</Link>
                    <Link to="/blogs" className='button-navbar' >Blogs</Link>
                    <Link to="/contact" className='button-navbar' >Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
