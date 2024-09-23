'use client'

import Image from 'next/image';
import React from 'react'

interface Props {
    data: {
        imageUrl?: string
        title?: string;
        description?: string;
    },
}
const ServiceCard = ({data}:Props) => {
    const { imageUrl, title, description } = data
  return (
    <div className='flex flex-col items-center text-center min-w-[320px] max-w-[400px] p-4 gap-4 border border-black/5 shadow-lg rounded-xl'>
        {imageUrl && <Image src={imageUrl} height={160} width={195} alt={title || 'package photo'} className='object-contain'/>}
        {title && <h4 className='text-brand-blue text-xl lg:text-2xl font-bold max-sm:text-lg'>{title}</h4>}
        {description && <p className='text-center text-brand-blue max-sm:text-sm'>{description}</p>}
    </div>
  )
}

export default ServiceCard