'use client'

import React from 'react'
import { Icon } from '@/components/icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Nav = () => {
  const pathname = usePathname()

  const isCatalogActive = pathname === '/catalog'

  return (
    <div className='w-full flex justify-between items-center h-[40px] tablet:h-[50px] pc:h-[60px]'>
      <div className="bg-background w-[120px] phone:w-[247px] phone:h-[50px] rounded-[16px] border border-obsidian-300 py-[8px] px-[16px] flex gap-[24px] tablet:w-[452.96px] tablet:h-[58px] tablet:px-[32px] tablet:gap-[48px] items-center justify-between pointer-events-auto">
        <div className='w-[50px] phone:w-[167px] phone:h-[22px] flex items-center gap-[8.42px] tablet:w-[249.96px] tablet:h-[32px] tablet:flex-row tablet:gap-[12px] '>
        <Link href="/" className="flex items-center gap-[8.42px] tablet:gap-[12px]">
            <div>
              <Icon name="orangnav" />
            </div>
            <div className='gap-[4px] w-full h-auto items-center flex flex-row font-nordique tablet:w-[217.59px] tablet:h-[17px] tablet:flex-row'>
              <div className='hidden phone:block text-[16px] w-[137px] h-[11px] font-normal leading-[14.96px] tablet:text-[24px] tablet:w-[205px] tablet:h-[17px] tablet:leading-[23.1px]'>
                parfum orang biasa
              </div>
              <div className='hidden phone:block'>
                <Icon name="r" />
              </div>
            </div>
          </Link>
        </div>

        <div className='w-full h-auto flex items-center gap-[8px] relative'>
          <Link href="/catalog" className="flex items-center gap-[8px] group relative">
            <div className='relative'>
              <Icon name="catalog" />

              {isCatalogActive && (
                  <span className="absolute -top-[4px] -right-[4px] w-[6px] h-[6px] rounded-full bg-black tablet:hidden"></span>
                )}
            </div>
            <div className={`hidden tablet:block tablet:text-[16px] tablet:leading-[23.1px] transition-all ${isCatalogActive ? 'text-obsidian-800 font-bold' : 'text-obsidian-800'} group-hover:font-bold
              `}>
              Catalog
            </div>
          </Link>
        </div>
      </div>

   <div className="flex flex-row tablet:flex-col items-start gap-2 tablet:gap-0 pr-[24px] tablet:pr-0">  
      <Link href="https://shopee.co.id/parfumorangbiasa" target="_blank" rel="noopener noreferrer">
        <div
          className="
            w-[50px] h-[50px] border border-[#B6270A] bg-[#EE4D2D]
            flex flex-col justify-center items-center rounded-xl
            transition-all duration-300 ease-in-out
            group pointer-events-auto
            tablet:w-[100px] tablet:h-[158px] tablet:rounded-b-2xl
            tablet:rotate-90 tablet:translate-y-25
            tablet:hover:translate-x-[-20px]
          "
        >
          <div className="block tablet:hidden">
            <Icon name="shopee" />
          </div>
          <div className="hidden tablet:block tablet:translate-y-3 rotate-[-90deg] transition-all duration-300 group-hover:translate-y-[10px]">
            <Icon name="shopeelarge" />
          </div>
        </div>
      </Link>

      <Link href="https://vt.tiktok.com/ZSAW3xgrs/?page=Mall" target="_blank" rel="noopener noreferrer">
        <div
          className="
            w-[50px] h-[50px] p-[2px]
            bg-gradient-to-r from-[#EA2C89] to-[#01EDE6]
            rounded-xl transition-all duration-300 ease-in-out
            group pointer-events-auto
            tablet:w-[100px] tablet:h-[158px] tablet:rounded-b-2xl
            tablet:rotate-90 tablet:translate-y-14
            tablet:hover:translate-x-[-20px]
          "
        >
          <div
            className="
              w-full h-full bg-[#212121] rounded-xl
              flex flex-col justify-center items-center
              tablet:rounded-b-2xl
            "
          >
            <div className="block tablet:hidden">
              <Icon name="tiktokshop" />
            </div>
            <div className="hidden tablet:block tablet:translate-y-3 rotate-[-90deg] transition-all duration-300 group-hover:translate-y-[10px]">
              <Icon name="tiktokshoplarge" />
            </div>
          </div>
        </div>
      </Link>
    </div>

    </div>
  )
}

export default Nav
