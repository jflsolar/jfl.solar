import React from 'react'
import { Icon, Tree } from 'tabler-icons-react';

interface Props {
    data: {
        icon?: Icon
        title?: string;
        description?: string;
    },
}
const FeatureCard = ({data}:Props) => {
    const { icon:IconComponent, title, description } = data
  return (
    <div className='flex flex-col items-center text-center min-w-[320px] max-w-[320px] lg:max-w-[400px] max-sm:max-w-full p-4 gap-4'>
        {IconComponent && <IconComponent  size={60} strokeWidth={1} className='object-contain p-2 bg-[#FFF7F4] rounded-sm text-brand-yellow'/>}
        {title && <h4 className='text-brand-blue text-xl max-sm:text-base md:text-2xl font-bold'>{title}</h4>}
        {description && <p className='text-center text-brand-blue max-sm:text-sm'>{description}</p>}
    </div>
  )
}

export default FeatureCard