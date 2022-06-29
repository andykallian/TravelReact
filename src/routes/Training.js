import React from 'react'

import Navbar from '../components/Navbar'
import HeroImages from '../components/HeroImages'
import TrainingSection from '../components/Training'
import Footer from '../components/Footer'

const Training = () => {
  return (
    <div>
        <Navbar />
        <HeroImages  heading='TRAINING.' text='Pre-flight & In-flight training'/>
        <TrainingSection />
        <Footer />


    </div>
  )
}

export default Training