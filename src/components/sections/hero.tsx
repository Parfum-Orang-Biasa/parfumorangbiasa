"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { FaSquareArrowUpRight, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { IoLogIn } from "react-icons/io5";
import { getPerfumeData } from "../../../lib/perfumedata";
import { Perfume } from "../../../data/type";
import Link from "next/link";
import { ShopeeButton } from "../shopeebutton";
import { WavyBackground } from "../ui/wavy-background";
import { TikTokButton } from "../tiktokbutton";

const Hero = () => {
  const perfumes = getPerfumeData();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentPerfumeIndex, setCurrentPerfumeIndex] = useState(0);
  const [isAutoSwitching, setIsAutoSwitching] = useState(true);
  
  const defaultPerfume = {
    name: "metropolis",
    image: "https://placehold.co/560x530?text=Metropolis",
    subtitle: "",
    type: "",
    size: "",
    price: "",
    linkshopee: "",
    linktiktok: "",
    wavecolor: ["#6B7AA1", "#4C5C68", "#3B3C4A", "#746C78", "#C4B7CB"],
  };

  const [selectedPerfume, setSelectedPerfume] = useState(() => {
    if (perfumes.length > 0) {
      const firstPerfume = perfumes[0];
      return {
        name: firstPerfume.name,
        image: firstPerfume.image || `https://placehold.co/560x530?text=${firstPerfume.name}`,
        subtitle: firstPerfume.subtitle,
        type: firstPerfume.type,
        size: firstPerfume.size,
        price: firstPerfume.price,
        linkshopee: firstPerfume.linkshopee,
        linktiktok: firstPerfume.linktiktok,
        wavecolor: firstPerfume.wavecolor || defaultPerfume.wavecolor,
      };
    }
    return defaultPerfume;
  });

  const handlePerfumeSelect = useCallback((perfume: Perfume) => {
    setSelectedPerfume({
      name: perfume.name,
      image:
        perfume.image || `https://placehold.co/560x530?text=${perfume.name}`,
      subtitle: perfume.subtitle,
      type: perfume.type,
      size: perfume.size,
      price: perfume.price,
      linkshopee: perfume.linkshopee,
      linktiktok: perfume.linktiktok,
      wavecolor: perfume.wavecolor || defaultPerfume.wavecolor,
    });
    
    const index = perfumes.findIndex(p => p.name === perfume.name);
    if (index !== -1) {
      setCurrentPerfumeIndex(index);
    }
    
    setIsAutoSwitching(false);
    
    setTimeout(() => {
      setIsAutoSwitching(true);
    }, 1500);
  }, [perfumes, defaultPerfume.wavecolor]);

  useEffect(() => {
    // Initialize scroll button states after component mounts
    const initializeButtons = () => {
      checkScrollButtons();
    };
    
    // Check on mount
    const timer = setTimeout(initializeButtons, 100);
    
    // Add resize listener to recalculate on window resize
    const handleResize = () => {
      setTimeout(checkScrollButtons, 100);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isAutoSwitching || perfumes.length === 0) return;

    const interval = setInterval(() => {
      setCurrentPerfumeIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % perfumes.length;
        const nextPerfume = perfumes[nextIndex];
        handlePerfumeSelect(nextPerfume);
        return nextIndex;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, [isAutoSwitching, perfumes, handlePerfumeSelect]);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const isTablet = window.innerWidth >= 768;
      const cardWidth = isTablet ? 553 : 342; // tablet: 537px + 16px gap, mobile: 326px + 16px gap
      scrollContainerRef.current.scrollBy({
        left: -cardWidth,
        behavior: 'smooth'
      });
      setTimeout(checkScrollButtons, 300);
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const isTablet = window.innerWidth >= 768;
      const cardWidth = isTablet ? 553 : 342; // tablet: 537px + 16px gap, mobile: 326px + 16px gap
      scrollContainerRef.current.scrollBy({
        left: cardWidth,
        behavior: 'smooth'
      });
      setTimeout(checkScrollButtons, 300);
    }
  };

  return (
    <WavyBackground className="mx-auto w-full h-dvh flex flex-col items-center justify-between" colors={selectedPerfume.wavecolor}>
      <div className="flex flex-col items-center justify-center h-dvh pt-28 phone:pt-24 tablet:pt-24 relative">
        <div className="w-[300px] h-[40px] phone:w-[340px] phone:h-[45px] tablet:w-[520px] tablet:h-[80px] pc:w-[700px] pc:h-[104px] font-nordique text-[52px] phone:text-[64.93px] tablet:text-[108px] pc:text-[148px] leading-[58px] phone:leading-[70.82px] tablet:leading-[120px] pc:leading-[161.43px] text-center z-20 relative mb-[30px] phone:mb-[35px] tablet:mb-[50px] pc:mb-[70px]">
          {selectedPerfume.name}
        </div>

        <div className="flex justify-center items-center w-full z-10">
          <Image
            src={'/images/perfumes/hero.png'}
            alt={selectedPerfume.name}
            width={240}
            height={480}
            unoptimized
            className="object-contain w-[240px] phone:w-[300px] tablet:w-[380px] pc:w-[480px] max-h-[200px] phone:max-h-[300px] tablet:max-h-[380px] pc:max-h-[400px]"
          />
        </div>
      </div>

      <div className="w-screen relative">
        {/* Navigation Buttons - Side by Side on Right */}
        <div className="absolute right-[8px] top-1/2 transform -translate-y-44 z-10 flex gap-2 tablet:right-[32px] pc:right-[calc((100vw-1440px)/2+32px)]">
          {/* Left Navigation Button */}
          <button
            onClick={scrollLeft}
            className={`rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 ${
              !canScrollLeft ? 'opacity-50 cursor-not-allowed bg-[#212121]/50' : 'opacity-100 cursor-pointer bg-[#212121] hover:bg-[#212121]/80'
            }`}
            disabled={!canScrollLeft}
          >
            <FaChevronLeft size={20} className="text-white" />
          </button>

          {/* Right Navigation Button */}
          <button
            onClick={scrollRight}
            className={`rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 ${
              !canScrollRight ? 'opacity-50 cursor-not-allowed bg-[#212121]/50' : 'opacity-100 cursor-pointer bg-[#212121] hover:bg-[#212121]/80'
            }`}
            disabled={!canScrollRight}
          >
            <FaChevronRight size={20} className="text-white" />
          </button>
        </div>

        <div 
          ref={scrollContainerRef}
          className="w-full mx-auto overflow-x-auto px-[24px] pb-[24px] tablet:px-[64px] tablet:pb-[64px] pc:pb-[32px] pc:pl-[calc((100vw-1440px)/2+64px)] no-scrollbar"
          onScroll={checkScrollButtons}
          onMouseEnter={() => setIsAutoSwitching(false)}
          onMouseLeave={() => setIsAutoSwitching(true)}
        >
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
