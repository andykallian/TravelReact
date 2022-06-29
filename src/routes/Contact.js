import React from 'react'

import Navbar from '../components/Navbar'
import HeroImages from '../components/HeroImages'
import Footer from '../components/Footer'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
        <Navbar />
        <HeroImages  heading='CONTACT' text='Contact GLX Travel'/>
        <Form />
        <Footer />
    </div>
  )
}

export default Contact