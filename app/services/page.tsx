import ServiceCard from '@/components/Cards/ServiceCard'
import ServiceForm from '@/components/Services/ServiceForm'
import { ServicesData } from '@/constants/cardData'
import React from 'react'

const page = () => {
  return (
    <>
      <div className='w-full bg-white flex flex-col gap-16 px-8'>
        <div className='max-w-7xl flex flex-col mx-auto w-full py-14 tracking-[0.0652em] gap-12'>
            <h2 className='uppercase 3xl:text-5xl font-bold tracking-[0.0625em] text-brand-blue text-2xl md:text-3xl lg:text-4xl text-center'>
              Our <span className='text-brand-yellow'>Services</span>
            </h2>
            <div className='flex flex-wrap justify-center gap-10'>
            {
                ServicesData.map((item, index) => {
                return <ServiceCard key={`service-${index}`} data={item}/>
            })}
            </div>
        </div>
      </div>
      <ServiceForm/>
    </>
  )
}

export default page