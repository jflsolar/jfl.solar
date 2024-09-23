import AboutFounder from '@/components/About/AboutFounder'
import AboutJFL from '@/components/About/AboutJFL'
import CoreTeam from '@/components/About/CoreTeam'
import Mission from '@/components/About/Mission'
import Vision from '@/components/About/Vision'
import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col'>
        <AboutJFL/>
        <AboutFounder/>
        <Vision/>
        <Mission/>
        <CoreTeam/>
    </div>
  )
}

export default About