import React from 'react'
import './TrainingStyles.css'

import { Link } from 'react-router-dom'

import Pod from '../assets/pod.jpg'
import Moon from '../assets/moon.jpg'

const Training = () => {
  return (
    <div className='training'>
        <div className="left">
            <h1>Training</h1>
            <p>Thorough training is necessary when traveling to space. We offer all inclusive training for pre-flight and in-flight scenarios.</p>
            <Link to='/contact'><button className='btn'>Contact</button></Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="image-stack top">
                    <img src={Moon} className='img' alt="Lua" />
                </div>
                <div className="image-stack botton">
                    <img src={Pod} className='img' alt="Pod" />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Training