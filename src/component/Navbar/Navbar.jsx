import React, { useState } from 'react'
import './Navbar.css';
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import Logo from '../../Image/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggleMenu,setToggleMenu] = useState(false);
  const handleNavbar = ()=>{
    setToggleMenu(!toggleMenu);
  }


  return (
    <nav className='wrap-navbar'>
      <Link to={'/'} className="logo">
        <img src={Logo} alt="img" />
        <span>Doc-Book</span> 
      </Link>

      <div className="navbar">
        <span className='navbar-toggler-btn' onClick={handleNavbar}>
            <FaBarsStaggered size = {25} style = {{
              color: `${toggleMenu ? "#fff" : "#010101"}`
            }} />
        </span>
        <div
         className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className = "navbar-nav">
            <li className='nav-item'>
              <Link to = "/" className='nav-link text-uppercase text-white ls-1'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to = "/about" className='nav-link text-uppercase text-white ls-1'>about</Link>
            </li>
            <IoClose className='close-btn' onClick={handleNavbar} size = {25} style = {{
              color: `${toggleMenu ? "#fff" : "#010101"}`
            }} />
          </ul>
        </div>
        
      </div>
    </nav>
  )
}

export default Navbar
