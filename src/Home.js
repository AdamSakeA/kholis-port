import React from 'react'
import './styles/landing.scss'
import { MdEmail, MdDownload } from 'react-icons/md'
import { AiFillFolder } from 'react-icons/ai'

export default function Home() {
  return (
    <>
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
      <div className='landing-bottom'>
        <div className='pict-landing-bottom'>
          <div className='landing-bottom-left'>
            <img src="https:/fakeimg.pl/360x340/" alt='' className='porto1-left'/>
            <img src="https:/fakeimg.pl/360x470/" alt='' className='porto2-left'/>
          </div>
          <div className='landing-bottom-right'>
            <img src="https:/fakeimg.pl/760x526/" alt="" className='porto1-right' />
            <div className='landing-bottom-right-bottom'>
              <img src="https:/fakeimg.pl/360x280/" alt="" className='porto2-right' />
              <img src="https:/fakeimg.pl/360x280/" alt="" className='porto2-right' />
            </div>
          </div>
        </div>
      </div>
      <div className='landing-aboutme'>
        <div className='polygon-1'>
          <div className='component-polygon1'></div>
        </div>
        <div className='polygon-2'>
          <div className='component-polygon2'></div>
        </div>
        <h1 className='title-aboutme'>About me</h1>
        <p className='desc-aboutme'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam volutpat felis, aenean risus. Molestie dictumst tortor cum<br></br> bibendum lobortis tempor. Duis nisi amet, enim adipiscing porttitor amet, rutrum enim platea. Vitae eget sit suscipit sit neque<br></br> non condimentum quis. Pellentesque ipsum quis at purus pretium in vel in. Aenean luctus turpis nisi, et, neque, faucibus<br></br> sodales. Posuere risus semper erat cursus luctus nec gravida netus. Nulla venenatis, ac at urna, mi faucibus interdum nascetur.<br></br> Egestas rhoncus tristique ut etiam cursus augue malesuada. Nibh purus tempus luctus tempor. Nec ipsum ullamcorper et<br></br> nulla id integer. Fringilla sodales fusce non nunc nunc amet, ac at.</p>
      </div>
    </div>
    <div className='vector-bottom'>
      <div className='bg-vector-bottom'></div>
    </div>
    </>
  ) 
}
