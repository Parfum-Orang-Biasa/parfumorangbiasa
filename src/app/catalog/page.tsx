import React from 'react'
import { getPerfumeData } from "../../../lib/perfumedata";
import { Perfume } from '../../../data/type';
import Image from 'next/image'
import { ShopeeButton } from '@/components/shopeebutton';

export default function CatalogPage() {
  const perfumes =  getPerfumeData();

  return (
    <div id='catalog' className='max-w-[1440px] mx-auto flex flex-col'>
      {perfumes.map((item: Perfume, index: number) => (
        <div key={index} id={`${item.name.toLowerCase().replace(/\s+/g, '-')}`}  className='flex flex-col laptop:row laptop:flex-row gap-[48px] pt-[96px] tablet:gap-[64px] tablet:pt-[164px]'>
          <div className='w-full flex flex-col laptop:row laptop:flex-row items-center px-[32px]'> 
            <Image src={item.image} alt={item.name} width={278} height={262.95} unoptimized className='object-cover tablet:w-full tablet:h-[529.68px]'/>  {/* for now using placeholder, change it with real image later */}
          </div>
          <div className='w-full flex flex-col gap-[36px] tablet:gap-[48px]'>
            <div id='title' className='w-full flex flex-col gap-[24px]'>
              <div className='flex flex-row items-center gap-[8px]'>
                <div className="w-[66px] h-0 border border-obsidian-800"></div>
                <div className='text-[14px] font-bold tablet:text-[16px]'>{item.category}</div>
                <div className='text-[14px] tablet:text-[16px]'>{item.scent}</div>
              </div> 
              <div className='w-full text-[48px] tablet:text-[60px] font-normal font-nordique leading-[23.1px]'>
                {item.name}
              </div>
              <div className='text-[16px] font-bold leading-[16px] tablet:text-[20px] tablet:leading-[20px] text-obsidian-800 uppercase'>
                {item.subtitle}
              </div>
            </div>
            <div className='w-full text-[14px] font-normal leading-[20px] tablet:text-[16px] tablet:leading-[20px] text-obsidian-700 whitespace-pre-line'>
              {item.description}
            </div>
            <div className='w-full grid grid-cols-3 gap-y-[36px] gap-x-[24px] whitespace-pre-line'>
              <div className='w-full h-full flex flex-col gap-[8px]'>
                <div className='w-auto h-auto text-[12px] font-bold leading-[12px] tablet:text-[14px] tablet:leading-[14px] uppercase'>top</div>
                <div className='w-full h-auto text-[12px] font-normal leading-[12px] tablet:text-[14px] tablet:leading-[14px] uppercase'>{item.notes.top}</div>
              </div>
              <div className='w-full h-full flex flex-col gap-[8px]'>
                <div className='w-auto h-auto text-[12px] font-bold leading-[12px] tablet:text-[14px] tablet:leading-[14px] uppercase'>middle</div>
                <div className='w-full h-auto text-[12px] font-normal leading-[12px] tablet:text-[14px] tablet:leading-[14px] uppercase'>{item.notes.middle}</div>
              </div>
              <div className='w-full h-full flex flex-col gap-[8px]'>
                <div className='w-auto h-auto text-[12px] font-bold leading-[12px] tablet:text-[14px] tablet:leading-[14px] uppercase'>bottom</div>
                <div className='w-full h-auto text-[12px] font-normal leading-[12px] tablet:text-[14px] tablet:leading-[14px] uppercase'>{item.notes.bottom}</div>
              </div>
              <div className='w-full h-full flex flex-col gap-[8px]'>
                <div className='w-auto h-auto text-[12px] font-bold leading-[12px] tablet:text-[14px] tablet:leading-[14px] uppercase'>ketahanan</div>
                <div className='w-full h-auto text-[12px] font-normal leading-[12px] tablet:text-[14px] tablet:leading-[14px] uppercase'>{item.ketahanan}</div>
              </div>
              <div className='w-full h-full flex flex-col gap-[8px]'>
                <div className='w-auto h-auto text-[12px] font-bold leading-[12px] tablet:text-[14px] tablet:leading-[14px] uppercase'>daya jejak</div>
                <div className='w-full h-auto text-[12px] font-normal leading-[12px] tablet:text-[14px] tablet:leading-[14px] uppercase'>{item.dayaJejak}</div>
              </div>
              <div className='w-full h-full flex flex-col gap-[8px]'>
                <div className='w-auto h-auto text-[12px] font-bold leading-[12px] tablet:text-[14px] tablet:leading-[14px] uppercase'>proyeksi</div>
                <div className='w-full h-auto text-[12px] font-normal leading-[12px] tablet:text-[14px] tablet:leading-[14px] uppercase'>{item.proyeksi}</div>
              </div>
              <div className='w-full h-full flex flex-row gap-[8px] col-span-3 items-center'>
                <div className='w-auto h-auto text-[12px] font-bold leading-[12px] tablet:text-[14px] tablet:leading-[14px] uppercase'>{item.type}</div>
                <div className='w-auto h-auto text-[12px] font-normal leading-[12px] tablet:text-[14px] tablet:leading-[14px]uppercase'>{item.size}</div>
              </div>
            </div>
            <div className='w-full h-auto flex flex-col gap-[20px]'>
              <div className='w-auto h-auto font-normal text-[20px] leading-[20px] tablet:text-[24px] tablet:leading-[24px]'>{item.price}</div>
              <ShopeeButton href={item.link} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

