import React from 'react'
import { Icon } from '@/components/icons'

const footer = () => {
  return (
    <div id="footer" className="pt-[32px] flex flex-col pc:pt-[64px] tablet:pt-[64px]">
      <div id="about" className="w-full flex flex-col gap-[32px] tablet:gap-[64px] pc:gap-[64px]">
        <div className="w-full h-px bg-obsidian-300"></div>
        <div id="about-content" className="flex flex-col gap-[48px]">
          <div className="flex flex-col gap-[22.21px] tablet:flex-row pc:tablet:flex-row justify-center items-center">
            <div className="font-nordique tablet:w-[635px] h-auto text-[36px] tablet:text-[48px] font-normal leading-[40px] tablet:leading-[52px] text-center">
              parfum untuk kita, orang biasa
              </div>
                <div className="flex-shrink-0">
                  <Icon name="orang" />
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className='text-obsidian-700 text-center text-[14px] font-normal leading-[1] space-y-4 tablet:w-[856px] tablet:text-[16px] tablet:leading-[1.5] pc:text-[16px] pc:leading-[1.5]'>
                  <p>Dibuat oleh orang biasa, untuk kita, orang biasa.</p>
                  <p>
                    Tanpa janji yang dibuat-buat atau berlebihan, setiap aroma kami buat untuk menemani momen-momen kita
                    yang kadang berantakan, kadang indah—apa adanya.
                  </p>
                </div>
              </div>
          </div>
        <div className="w-full h-px bg-obsidian-300"></div>
      </div>
      <div id="links" className="w-full flex flex-col-reverse gap-[16px] py-[16px] tablet:py-[32px] tablet:flex-row tablet:justify-between pc:py-[32px] pc:flex-row pc:justify-between">
        <div className="flex justify-center items-center text-[16px] font-medium leading-7 text-center tablet:text-left pc:text-left">
          © 2025 Parfum Orang Biasa
        </div>
        <div id="socmed" className="flex justify-center items-center">
          <div className="grid grid-cols-3 gap-[16px]">
            <div className="w-[36px] h-[36px] flex justify-center items-center rounded-[10px] border-[0.81px] border-obsidian-300 shadow-md p-[8px] gap-[4px]">
              <a href="https://www.instagram.com/parfumorangbiasa/" className="flex justify-center items-center">
                <Icon name="instagram" />
              </a>
            </div>
            <div className="w-[36px] h-[36px] flex justify-center items-center rounded-[10px] border-[0.81px] border-obsidian-300 shadow-md p-[8px] gap-[4px]">
              <a href="https://www.tiktok.com/@parfumorangbiasa" className="flex justify-center items-center">
                <Icon name="tiktok" />
              </a>
            </div>
            <div className="w-[36px] h-[36px] flex justify-center items-center rounded-[10px] border-[0.81px] border-obsidian-300 shadow-md p-[8px] gap-[4px]">
              <a href="#" className="flex justify-center items-center">
                <Icon name="whatsapp" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default footer;
