import React from 'react'
import './styles/landing.scss'
import { MdEmail, MdDownload } from 'react-icons/md'
import { AiFillFolder } from 'react-icons/ai'

export default function Home() {
  return (
    <div className='landing'>
      <div className='vector'>
        <div className='bg-vector'></div>
      </div>
      <div className='landing-container'>
        <p className='landing-hello'>Hello!</p>
        <div className='landing-title'>
          <h1>I'm Kholis,</h1>
          <ul className='dynamic-texts'> 
            <li><h1 className='dynamic-title'>UIX Designer</h1></li>
            <li><h1 className='dynamic-title'>UIX Designer</h1></li>
            <li><h1 className='dynamic-title'>UIX Designer</h1></li>
            <li><h1 className='dynamic-title'>UIX Designer</h1></li>
            <li><h1 className='dynamic-title'>UIX Designer</h1></li>
          </ul>
          {/* <h1>UIX Designer</h1> */}
        </div>
        <p className='desc-landing'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam volutpat felis, aenean risus. Molestie<br></br> dictumst tortor cum bibendum lobortis tempor. </p>
      </div>
      <div className='landing-buttons-container'>
        <div className='landing-buttons reachme'>
          <MdEmail />
          <p className='buttons-value'>Reach me</p>
        </div>
        <div className='landing-buttons resume'>
          <ul className='dynamic-icons'>
            <li><AiFillFolder className='buttons-icon'/></li>
            <li><MdDownload className='buttons-icon'/></li>
          </ul>
          <p className='buttons-value'>My Resume</p>
        </div>
      </div>
    </div>
  )
}
