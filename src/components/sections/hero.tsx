import React from 'react'
import { WavyBackground } from "../ui/wavy-background";


const hero = () => {
  return (
    <WavyBackground className="max-w-[1440px] mx-auto pb-40">
      <p className="text-2xl md:text-4xl lg:text-7xl text-black font-bold inter-var text-center">
        Hero waves are cool
      </p>
      <p className="text-base md:text-lg mt-4 text-black font-normal inter-var text-center">
        Leverage the power of canvas to create a beautiful hero section
      </p>
    </WavyBackground>
  );
}

export default hero
