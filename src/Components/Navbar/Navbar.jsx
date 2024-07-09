/* eslint-disable no-unused-vars */
import React from 'react'
import './navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="content">
                <h1 style={{
                    fontSize: '1.5rem',
                }}>KB.</h1>
                {/* <img width={60} src="assets/logo.svg" alt="" /> */}
                <div className='buttons-row'>
                    <div onClick={()=>{console.log("sdfndjnf");}} className='button-navbar' >Projects</div>
                    <div onClick={()=>{console.log("sdfndjnf");}} className='button-navbar' >Resume</div>
                    <div onClick={()=>{console.log("sdfndjnf");}} className='button-navbar' >Blogs</div>
                    <div onClick={()=>{console.log("sdfndjnf");}} className='button-navbar' >Contact</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
