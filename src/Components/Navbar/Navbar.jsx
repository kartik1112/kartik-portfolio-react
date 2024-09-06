/* eslint-disable no-unused-vars */
import React from 'react'
import './navbar.css'
import { Link, Router } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="content">
                <Link to={"/"} style={{
                    textDecoration: 'none',
                    backgroundColor: 'transparent'
                }}>
                    <h1 style={{
                        fontSize: '1.5rem',
                    }}>KB.</h1>
                </Link>
                <div className='buttons-row'>
                    <Link  to="/" className='button-navbar' >Home</Link>
                    <Link to="/projects" className='button-navbar' >Projects</Link>
                    <Link to="/resume" className='button-navbar' >Resume</Link>
                    <Link to="/blogs" className='button-navbar' >Blogs</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
