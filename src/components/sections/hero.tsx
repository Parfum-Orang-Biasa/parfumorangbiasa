import React from 'react'
import Image from 'next/image'

const hero = () => {
  return (
    // <WavyBackground className="max-w-[1440px] mx-auto">
    //   <div className='w-full h-auto flex flex-col gap pb-[20px]'>
    //     <div className="text-[64.93px] leading-[70.82px] font-nordique text-center">
    //       metropolis
    //     </div>
    //     <div className="text-base md:text-lg mt-4 text-black font-normal inter-var text-center">
    //       <Image src="https://placehold.co/560x530?text=Metropolis" alt="dump" width={318.39} height={301.15} unoptimized className='object-cover tablet:w-full tablet:h-[529.68px]'/> 
    //     </div>
    //   </div>
      
    //   <div className='relative flex items-center w-full'>
    //     <div className='w-full h-auto overflow-x-scroll scroll scroll-smooth scrollbar-hide whitespace-nowrap flex'>
          
    //     </div>
    //   </div>
    // </WavyBackground>
    <div className="max-w-[1440px] mx-auto w-full h-[800px] flex flex-col items-center justify-center">
      <div className='w-[318.39px] h-[330.5px] relative'>
        <div className="w-[297px] h-[45px] text-[64.93px] leading-[70.82px] font-nordique text-center">
          metropolis
        </div>
        <div className="text-base md:text-lg mt-4 text-black font-normal inter-var text-center">
          <Image src="https://placehold.co/560x530?text=Metropolis" alt="dump" width={318.39} height={301.15} unoptimized className='object-cover tablet:w-full tablet:h-[529.68px]'/> 
        </div>
      </div>
    </div>
  );
}

export default hero
