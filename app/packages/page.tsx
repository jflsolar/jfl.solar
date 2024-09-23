import GridTiedPackages from '@/components/Packages/GridTiedPackages'
import HybridPackages from '@/components/Packages/HybridPackages'
import React from 'react'

const Packages = () => {
  return (
    <div className='w-full bg-white flex flex-col gap-16'>
        <HybridPackages/>
        <GridTiedPackages/>
    </div>
  )
}

export default Packages