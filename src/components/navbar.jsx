import React from 'react'
import '../styles/navbar.css'
import logo from '../assets/images/logo.png'
import jawadhu from '../assets/images/jawadhu.jpg'
import About from './about'

function Navbar() {
  return (
    <>
   <div className="header">
  <div className="logo">
    <img src={logo} alt="Logo" />
  </div>
  <div className="details">
    <ul>
      <li><a href="/home">Home</a></li>
      <li><a href="/gallery">Gallery</a></li>
      <li><a href="/destination">Destination</a></li>
      <li><a href="/contactus">Contact Us</a></li>
    </ul>
  </div>
</div>

    <div className="jawadhu">
        <img src={jawadhu} alt="jawadhu-img" />
    </div>
  

<About/>

    </>
  )
}

export default Navbar