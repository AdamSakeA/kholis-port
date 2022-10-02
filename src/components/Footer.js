import React from 'react'
import { FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import '../styles/footer.scss'

export default function Footer() {
  return (
    <div className='footer'>
      <h1 className='footer-title'>Reach me out</h1>
      <p className='footer-desc'>for bussiness inquiry please send email to <span>Febriansyahnurkholis@gmail.com</span></p>
      <div className='footer-icons'>
        <FaInstagram />
        <FaLinkedin />
        <FaWhatsapp />
      </div>
    </div>
  )
}
