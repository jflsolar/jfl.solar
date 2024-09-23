import React from 'react'
import CustomButton from '../CustomButton'


const HomeCTA = () => {
    return (
        <div className='w-full bg-brand-blue'>
            <div className='max-w-4xl mx-auto py-40 max-sm:py-20 px-8'>
                <div className='flex gap-8 flex-col items-center text-center'>
                    <h2 className='uppercase text-2xl max-sm:text-xl md:text-3xl lg:text-4xl font-bold text-brand-yellow'>
                    READY TO GO SOLAR?
                    </h2>
                    <p className='md:text-xl text-base max-sm:text-sm text-slate-50'>Join the growing number of homeowners and businesses making the switch to clean, renewable energy. Whether you're interested in a residential, commercial, or industrial solar solution, we're here to help you take the next step.</p>
                    <CustomButton className='text-base max-sm:text-sm lg:text-lg w-fit px-8 py-4 3xl:text-2xl' text='Request Your Free Quote' variant='primary' type='link' href='/quotation'/>
                </div>
            </div>
        </div>
    )
}

export default HomeCTA