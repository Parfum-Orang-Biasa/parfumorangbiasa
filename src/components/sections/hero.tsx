"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import { IoLogIn } from "react-icons/io5";
import { getPerfumeData } from "../../../lib/perfumedata";
import { Perfume } from "../../../data/type";
import Link from "next/link";
import { ShopeeButton } from "../shopeebutton";
import { WavyBackground } from "../ui/wavy-background";
import { TikTokButton } from "../tiktokbutton";

const Hero = () => {
  const perfumes = getPerfumeData();
  const defaultPerfume = {
    name: "metropolis",
    image: "https://placehold.co/560x530?text=Metropolis",
    subtitle: "",
    type: "",
    size: "",
    price: "",
    linkshopee: "",
    wavecolor: ["#6B7AA1", "#4C5C68", "#3B3C4A", "#746C78", "#C4B7CB"],
  };

  const [selectedPerfume, setSelectedPerfume] = useState(defaultPerfume);

  const handlePerfumeSelect = (perfume: Perfume) => {
    setSelectedPerfume({
      name: perfume.name,
      image:
        perfume.image || `https://placehold.co/560x530?text=${perfume.name}`,
      subtitle: perfume.subtitle,
      type: perfume.type,
      size: perfume.size,
      price: perfume.price,
      linkshopee: perfume.linkshopee,
      wavecolor: perfume.wavecolor || defaultPerfume.wavecolor,
    });
  };

  return (
    <WavyBackground className="mx-auto w-full h-dvh flex flex-col items-center justify-between" colors={selectedPerfume.wavecolor}>
      <div className="flex flex-col items-center justify-center h-dvh pt-28 phone:pt-24 tablet:pt-24 relative">
        <div className="w-[300px] h-[40px] phone:w-[340px] phone:h-[45px] tablet:w-[520px] tablet:h-[80px] pc:w-[700px] pc:h-[104px] font-nordique text-[52px] phone:text-[64.93px] tablet:text-[108px] pc:text-[148px] leading-[58px] phone:leading-[70.82px] tablet:leading-[120px] pc:leading-[161.43px] text-center z-20 relative mb-[-60px] phone:mb-[-65px] tablet:mb-[-80px] pc:mb-[-100px]">
          {selectedPerfume.name}
        </div>

        <div className="flex justify-center items-center w-full z-10">
          <Image
            src={'/images/perfumes/metropolis.png'}
            alt={selectedPerfume.name}
            width={240}
            height={480}
            unoptimized
            className="object-contain w-[320px] phone:w-[400px] tablet:w-[500px] pc:w-[630px] max-h-[550px] phone:max-h-[650px] tablet:max-h-[750px] pc:max-h-[900px]"
          />
        </div>
      </div>

      <div className="w-screen">
        <div className="w-full mx-auto overflow-x-auto px-[24px] pb-[24px] tablet:px-[64px] tablet:pb-[64px] pc:pb-[32px] pc:pl-[calc((100vw-1440px)/2+64px)] no-scrollbar">
          <div className="flex flex-row gap-[16px] whitespace-nowrap min-w-max pb-4">
            {perfumes.map((perfume: Perfume, index: number) => (
              <div 
                key={index} 
                className={`w-[326px] tablet:w-[537px] h-auto rounded-[16px] flex flex-col justify-between bg-background p-[16px] gap-[16px] cursor-pointer hover:shadow-md transition-shadow ${
                  selectedPerfume.name === perfume.name 
                    ? 'border-[1px] border-obsidian-800' 
                    : 'border-[0.81px] border-obsidian-300'
                }`}
                onClick={() => handlePerfumeSelect(perfume)}
              >
                <div className="justify-between flex flex-row w-full items-center overflow-hidden">
                  <div className="font-nordique text-[24px] leading-[22px] phone:text-[28px] phone:leading-[23.1px] tablet:text-[32px]">
                    {perfume.name}
                  </div>
                  <Link 
                    href={`/catalog#${perfume.name.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="transition-transform duration-200 hover:scale-125"
                  >
                    <FaSquareArrowUpRight size={24} />
                  </Link>
                </div>
                <div className="whitespace-normal break-words text-[12px] leading-[18px] phone:text-[14px] phone:leading-[20px] tablet:text-[16px] capitalize">
                  {perfume.subtitle}
                </div>
                <div className="flex flex-col tablet:flex-row tablet:items-center tablet:justify-between gap-[8px] tablet:gap-0">
                <div className="text-[12px] leading-[18px] uppercase overflow-hidden phone:text-[14px] phone:leading-[20px] tablet:text-[16px]">
                    <span className="font-bold ">{perfume.type}</span>{" "}
                    {perfume.size} | {perfume.price}
                  </div>
                </div>
                <div className="w-full flex items-center justify-center gap-2">
                  <ShopeeButton href={perfume.linkshopee} height="h-[40px]" showMobileOnTablet={true}/>
                  <TikTokButton href={perfume.linktiktok} height="h-[40px]" showMobileOnTablet={true}/>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-center">
              <Link href="/catalog" className="flex items-center justify-center gap-[8px] h-[48px] py-[16px] px-[20px] mx-auto">
                <div className="flex items-center justify-center font-medium leading-[23.1px] text-[12px] phone:text-[14px] tablet:text-[16px]">
                  Lihat Catalog Lengkap
                </div>
                <div>
                  <IoLogIn size={24} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </WavyBackground>
  );
};

export default Hero;
