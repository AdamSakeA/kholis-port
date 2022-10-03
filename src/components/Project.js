import React from 'react'
import '../styles/project.scss'

export default function Project(props) {
  return (
    <div className={`project pages ${props.backgroundColor}`}>
      <div className='project-container'>
        <div className='project-left'>
          <div className='dates'>
            <h3 className='date-title'>Date</h3>
            <p className='date-desc'>{props.date}</p>
          </div>
          <div className='project-profile'>
            <h1 className='project-title'>{props.projectName}</h1>
            <p className='project-desc'>{props.projectDesc}</p>
          </div>
        </div>
        <div className='project-img-container mobile'>
          <img src="" alt=""/>
        </div>
        <div className='project-right'>
          <div className='project-tools'>
            <h2 className='tools-title'>{props.tools}</h2>
            <p className='tools-desc'>{props.toolsDesc}</p>
          </div>
          <div className='project-tools'>
            <h2 className='tools-title'>{props.tools}</h2>
            <p className='tools-desc'>{props.toolsDesc}</p>
          </div>
          <div className='project-tools'>
            <h2 className='tools-title'>{props.link}</h2>
            <p className='tools-desc'>{props.linkDesc}</p>
          </div>
        </div>
      </div>
      <div className='project-img-container desktop'>
        <img src="" alt=""/>
      </div>
    </div>
  )
}
