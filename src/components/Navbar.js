import React from 'react'
import '../styles/navbar.scss'
import { FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar-container container'>
        <div className='navbar-left'>
          <div className='icon-kholis'></div>
          <h1 className='navbar-title'>Kholis</h1>
        </div>
        <div className='navbar-right'>
          <FaInstagram />
          <FaLinkedin />
          <FaWhatsapp />
        </div>
      </div>
    </div>
  )
}
