import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'
import Logo from '../assests/BG-logo.png'
import cart from '../assests/Cart-Icon.png'

const Navbar = () => {
  return (
    <>
    <header>
        <div className="NavContainer">
            <span className='Logo'><img src={Logo} width={100} alt="" /></span>
        <div className='NavItemsMain'>

            <Link className='NavItems' to="/">Home</Link>
            <Link className='NavItems' to="/Products">Products</Link>
            <Link className='NavItems' to="/Support">Support</Link>
            <Link className='NavItems' to="/Cart"><img src={cart} width={50} alt="" /></Link>
        </div>
        </div>
    </header>
    </>
  )
}

export default Navbar