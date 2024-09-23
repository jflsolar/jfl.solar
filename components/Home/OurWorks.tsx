import { FeaturesData } from '@/constants/cardData'
import React from 'react'
import FeatureCard from '../Cards/FeatureCard'

const OurWorks = () => {
  return (
    <div className='w-full bg-white flex flex-col gap-16 py-32'>
        <div className='max-w-7xl flex flex-col mx-auto w-full py-14 tracking-[0.0652em] gap-12'>
            <h2 className='uppercase text-brand-blue font-bold text-5xl text-center'>
              Our <span className='text-brand-yellow'>Works</span>
            </h2>
            <div className='flex flex-wrap justify-evenly gap-10'>
            {
                FeaturesData.map((item, index) => {
                return <FeatureCard key={`service-${index}`} data={item}/>
            })}
            </div>
        </div>
    </div>
  )
}

export default OurWorks