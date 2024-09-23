import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <main className="relative flex h-screen flex-col items-center justify-between max-sm:px-0 px-10 bg-white  "
    >
      <Image src={'/bg.png'} height={980} width={1440} alt='hero' className='w-full object-cover h-screen absolute left-0 top-0 right-0 bg-cover bg-top'/>
      <div className="flex flex-col items-center justify-center gap-1 font-bold text-center min-h-[90vh] text-slate-50 calibri">
        <h1 className="sm:text-5xl text-4xl md:text-6xl lg:text-7xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.35)]">PV System Solutions</h1>
        <p className="sm:text-2xl text-xl md:text-3xl lg:text-4xl tracking-wide drop-shadow-[0_2px_2px_rgba(0,0,0,0.55)]">For Residential, Industrial & Commercial</p>
      </div>
    </main>
  )
}

export default Hero