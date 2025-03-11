import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
    <img className="logo" src="/logo.jpg" alt="LEGO Logo" />
<ul className='feature'>
        <li>Home</li>
        <li>Discover</li>
        <li>Shop</li>
        <li>Community</li>
        <li>Contact us</li>


      </ul>
    </div>
  )
}

export default Navbar
