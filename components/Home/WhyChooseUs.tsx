import { FeaturesData } from '@/constants/cardData'
import React from 'react'
import FeatureCard from '../Cards/FeatureCard'

const WhyChooseUs = () => {
  return (
    <div className='w-full bg-white flex flex-col gap-16 py-40 max-sm:py-20'>
        <div className='max-w-7xl flex flex-col mx-auto w-full max-sm:px-8 tracking-[0.0652em] gap-12 max-sm:text-center items-center'>
            <h2 className='uppercase 3xl:text-5xl font-bold tracking-[0.0625em] text-brand-blue text-2xl md:text-3xl lg:text-4xl'>
              <span className='text-brand-yellow'>Why</span> Choose Us?
            </h2>
            <p className='text-base lg:text-lg 3xl:text-2xl text-brand-blue'>Your Trusted Partner in Solar Energy Excellence</p>
            <div className='flex flex-wrap justify-center gap-5 lg:gap-10'>
            {
                FeaturesData.map((item, index) => {
                return <FeatureCard key={`service-${index}`} data={item}/>
            })}
            </div>
        </div>
    </div>
  )
}

export default WhyChooseUs