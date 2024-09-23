// import Image from 'next/image'
// import React from 'react'

// const Brand = () => {
//   return (
//     <div className='bg-white w-full'>
//         <div className='w-full max-w-7xl flex mx-auto justify-between py-10'>
//             <Image src={'/brand-deye.png'} alt='deye' height={60} width={100} className='object-contain'/>
//             <Image src={'/brand-ate.png'} alt='alltopelec' height={60} width={108} className='object-contain'/>
//             <Image src={'/brand-seraphim.png'} alt='seraphim' height={60} width={172} className='object-contain'/>
//             <Image src={'/brand-lxp.png'} alt='luxpower' height={60} width={200} className='object-contain'/>
//             <Image src={'/brand-ae.png'} alt='ae solar' height={28} width={210} className='object-contain'/>
//             <Image src={'/brand-trina.png'} alt='trina' height={32} width={132} className='object-contain'/>
//         </div>
//     </div>
//   )
// }

// export default Brand

import Image from 'next/image';
import React from 'react';

const Brand = () => {
  return (
    <div className='bg-white w-full px-8 shadow max-[450px]:px-4'>
      <div className='w-full max-w-7xl flex flex-wrap items-center justify-center md:justify-evenly mx-auto py-10 gap-8 md:gap-4'>
        <Image
          src={'/brand-deye.png'}
          alt='deye'
          height={60}
          width={100}
          className='object-contain'
        />
        <Image
          src={'/brand-ate.png'}
          alt='alltopelec'
          height={60}
          width={108}
          className='object-contain'
        />
        <Image
          src={'/brand-seraphim.png'}
          alt='seraphim'
          height={60}
          width={172}
          className='object-contain'
        />
        <Image
          src={'/brand-lxp.png'}
          alt='luxpower'
          height={60}
          width={200}
          className='object-contain'
        />
        <Image
          src={'/brand-ae.png'}
          alt='ae solar'
          height={28}
          width={210}
          className='object-contain'
        />
        <Image
          src={'/brand-trina.png'}
          alt='trina'
          height={32}
          width={132}
          className='object-contain'
        />
      </div>
    </div>
  );
};

export default Brand;
