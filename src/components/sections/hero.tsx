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

const Hero = () => {
  const perfumes = getPerfumeData();
  const defaultPerfume = {
    name: "metropolis",
    image: "https://placehold.co/560x530?text=Metropolis",
    subtitle: "",
    type: "",
    size: "",
    price: "",
    link: "",
    wavecolor: ["#FCD1D1", "#F8B195", "#F67280", "#C06C84", "#6C5B7B"],
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
      link: perfume.link,
      wavecolor: perfume.wavecolor || defaultPerfume.wavecolor,
    });
  };

  return (
    <WavyBackground className="max-w-[1440px] mx-auto w-full h-dvh flex flex-col items-center justify-between" colors={selectedPerfume.wavecolor}>
      <div className="flex flex-col items-center justify-center h-dvh pt-28 phone:pt-16 tablet:pt-0">
      <div className="w-[260px] h-[40px] phone:w-[297px] phone:h-[45px] tablet:w-[480px] tablet:h-[80px] pc:w-[676px] pc:h-[104px] font-nordique text-[52px] phone:text-[64.93px] tablet:text-[108px] pc:text-[148px] leading-[58px] phone:leading-[70.82px] tablet:leading-[120px] pc:leading-[161.43px] text-center z-10">
        {selectedPerfume.name}
      </div>

        <div className="flex justify-center items-center w-full">
        <Image
          src={selectedPerfume.image}
          alt={selectedPerfume.name}
          width={160}
          height={320}
          unoptimized
          className="object-contain w-[160px] phone:w-[200px] tablet:w-[280px] pc:w-[350px] max-h-[320px] phone:max-h-[400px] tablet:max-h-[450px] pc:max-h-[500px]"
        />
        </div>
      </div>

      <div className="w-screen">
        <div className="w-full max-w-[1440px] mx-auto overflow-x-auto px-[24px] pb-[24px] tablet:px-[64px] tablet:pb-[64px] no-scrollbar">
          <div className="flex flex-row gap-[16px] whitespace-nowrap min-w-max pb-4">
            {perfumes.map((perfume: Perfume, index: number) => (
              <div key={index} className="w-[326px] tablet:w-[537px] h-[153px] phone:h-auto rounded-[16px] flex flex-col bg-background border-[0.81px] border-obsidian-300 p-[16px] gap-[16px] cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => handlePerfumeSelect(perfume)}>
                <div className="justify-between flex flex-row w-full items-center overflow-hidden">
                  <div className="font-nordique text-[24px] leading-[22px] phone:text-[28px] phone:leading-[23.1px] tablet:text-[32px]">
                    {perfume.name}
                  </div>
                  <Link href={`/catalog#${perfume.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    <FaSquareArrowUpRight size={24} />
                  </Link>
                </div>
                <div className="text-[12px] leading-[18px] overflow-hidden phone:text-[14px] phone:leading-[20px] tablet:text-[16px]">
                  {perfume.subtitle}
                </div>
                <div className="flex flex-col tablet:flex-row tablet:items-center tablet:justify-between gap-[8px] tablet:gap-0">
                <div className="text-[12px] leading-[18px] uppercase overflow-hidden phone:text-[14px] phone:leading-[20px] tablet:text-[16px]">
                    <span className="font-bold ">{perfume.type}</span>{" "}
                    {perfume.size} | {perfume.price}
                  </div>
                  <div>
                    <ShopeeButton href={perfume.link} height="h-[32px]" pt="pt-[4px]" showMobileOnTablet={true} tabletWidth="w-[128px]"/>
                  </div>
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
