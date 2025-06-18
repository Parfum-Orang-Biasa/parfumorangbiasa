import React from 'react'
import Image from 'next/image'

const hero = () => {
  return (
    <div>
      <Image src="https://placehold.co/560x530?text=Hero" alt="hero" width={342} height={800} unoptimized className='object-cover tablet:w-full tablet:h-[944px]'/> 
    </div>
  )
}

export default hero
