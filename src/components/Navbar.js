import React from 'react'
import logo from '../images/headerLogo.png'
import { Link } from "react-router-dom"
import './Navbar.css'

function Navbar() {
  return (
    <div className='navBar'>
        <div className="nav-container">
            <img src={logo} alt="headerLogo.png" className="header-image"/>
            <ul className="navbar-ul">
                <li><Link to="/"><button className="nav-button">HOME</button></Link></li>
                <li><Link to="/about"><button className="nav-button">ABOUT</button></Link></li>
                <li><Link to="/projects"><button className="nav-button">PROJECTS</button></Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar