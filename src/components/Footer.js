import React from 'react'
import './Footer.css'
import {FaFacebook, FaGithub, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaSearchLocation size={20} style={{color: '#ffffff', marginRight: '2rem'}} />
                    <div>
                        <p>123 Acme St</p>
                        <h4>Houston, Tx</h4>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color: '#ffffff', marginRight: '2rem'}} />1-800-123-1456</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color: '#ffffff', marginRight: '2rem'}}/> trips@galaxy.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About Company</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti blanditiis voluptatem consectetur, sint a sapiente saepe velit dolorum nulla laborum reprehenderit corporis nobis debitis ipsum minima modi. Nobis, porro accusantium.</p>
                <div className="social">
                    <a href="https://www.linkedin.com/in/andersonviana-/" target='_blank' rel="noreferrer">
                        <FaLinkedin size={30} style={{color: '#ffffff', marginRight: '1rem'}} />
                    </a>
                    <a href="https://github.com/andykallian" target='_blank' rel="noreferrer">
                        <FaGithub size={30} style={{color: '#ffffff', marginRight: '1rem'}} />
                    </a>
                    <a href="https://www.facebook.com/ViannaAndy" target='_blank' rel="noreferrer">
                        <FaFacebook size={30} style={{color: '#ffffff', marginRight: '1rem'}} />
                    </a>
                    <a href="https://twitter.com/kallianandy" target='_blank' rel="noreferrer">
                        <FaTwitter  size={30} style={{color: '#ffffff', marginRight: '1rem'}} />
                    </a>                 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer