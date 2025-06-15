'use client'

import React from 'react'
import { Icon } from '@/components/icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Nav = () => {
  const pathname = usePathname()

  const isCatalogActive = pathname === '/catalog'

  return (
    <div className='w-full flex justify-between items-center'>
      <div className="bg-foreground w-[247px] h-[40px] rounded-[16px] border border-obsidian-300 py-[8px] px-[16px] flex gap-[24px] tablet:w-[452.96px] tablet:h-[48px] tablet:px-[32px] tablet:gap-[48px] items-center justify-between">
        <div className='w-[167px] h-[22px] flex items-center gap-[8.42px] tablet:w-[249.96px] tablet:h-[32px] tablet:flex-row tablet:gap-[12px] '>
        <Link href="/" className="flex items-center gap-[8.42px] tablet:gap-[12px]">
            <div>
              <Icon name="orangnav" />
            </div>
            <div className='gap-[4px] w-full h-auto items-center flex flex-row font-nordique tablet:w-[217.59px] tablet:h-[17px] tablet:flex-row'>
              <div className='text-[16px] w-[137px] h-[11px] font-normal leading-[14.96px] tablet:text-[24px] tablet:w-[205px] tablet:h-[17px] tablet:leading-[23.1px]'>
                parfum orang biasa
              </div>
              <div>
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

      <Link href="https://shopee.com" target="_blank" rel="noopener noreferrer">  {/* Link to Shopee, replace with actual link */}
        <div className="w-[84px] h-[97.27px] border-[0.46px] tablet:w-[128px] tablet:h-[147.03] tablet:border-[0.67px] border-[#B6270A] bg-[#EE4D2D] flex flex-col justify-center items-center rounded-b-2xl px-[16px] py-[8px] tablet:px-[24px] tablet:py-[12px]">
          <div className="block tablet:hidden">
            <Icon name="shopee" />
          </div>
          <div className="hidden tablet:block tablet:translate-y-[12px]">
            <Icon name="shopeelarge" />
          </div>
        </div>
      </Link>
      
    </div>
  )
}

export default Nav
