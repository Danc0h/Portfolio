import React from 'react'
import CV from '../Assets/MyCV.pdf'
import './herosection.css'


function MyCV() {
  return (
    <div className='cta'>
      <a href={CV} className='btn' >View my Resume</a>
    </div>
  )
}

export default MyCV
