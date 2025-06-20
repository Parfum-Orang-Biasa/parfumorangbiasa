import React from 'react';
import Link from 'next/link';
import { Icon } from '@/components/icons';

interface ShopeeButtonProps {
  href: string;
  width?: string;
  height?: string;
  className?: string;
  px?: string;
  py?: string;
  pt?: string;
  pb?: string;
  mobileIcon?: string; 
  tabletIcon?: string; 
  showMobileOnTablet?: boolean;

  tabletWidth?: string; 
  tabletHeight?: string;
  tabletPt?: string;
  tabletPb?: string;
  tabletPy?: string;
  tabletPx?: string;
  pcPt?: string;
  pcPb?: string;
  pcPy?: string;
  pcPx?: string;
}

export const ShopeeButton: React.FC<ShopeeButtonProps> = ({ 
  href, 
  width = 'w-full', 
  height = 'h-auto',
  className = '',
  px = 'px-[24px]',
  py = 'py-[12px]',
  pt,
  pb,
  mobileIcon = 'shopeebutton',
  tabletIcon = 'shopeebuttonlarge',
  showMobileOnTablet = false,
  tabletWidth = '',
  tabletHeight = '',
  tabletPt = '',
  tabletPb = '',
  tabletPy = '',
  tabletPx = '',
  pcPt = '',
  pcPb = '',
  pcPy = '',
  pcPx = ''
}) => {
  const paddingY = pt || pb ? '' : py;
  const paddingTop = pt || '';
  const paddingBottom = pb || '';

  const tabletPaddingY = tabletPt || tabletPb ? '' : tabletPy;
  const tabletPaddingTop = tabletPt || '';
  const tabletPaddingBottom = tabletPb || '';
  
  const pcPaddingY = pcPt || pcPb ? '' : pcPy;
  const pcPaddingTop = pcPt || '';
  const pcPaddingBottom = pcPb || '';

  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <div className={`flex flex-col ${width} ${height} rounded-[1000px] border-[1.79px] border-[#B6270A] bg-[#EE4D2D] gap-[8px] 
        ${px} ${paddingY} ${paddingTop} ${paddingBottom} 
        tablet:${tabletWidth} tablet:${tabletHeight} tablet:${tabletPx} tablet:${tabletPaddingY} tablet:${tabletPaddingTop} tablet:${tabletPaddingBottom}
        pc:${pcPx} pc:${pcPaddingY} pc:${pcPaddingTop} pc:${pcPaddingBottom}
        items-center ${className}`}>
        <div className='w-[68px] h-[21.76px] tablet:w-[96px] tablet:h-[30px] px-[7.7px] tablet:px-[10.3px]'>
          {showMobileOnTablet ? (
            <Icon name={mobileIcon} />
          ) : (
            <>
              <div className="block tablet:hidden">
                <Icon name={mobileIcon} />
              </div>
              <div className="hidden tablet:block">
                <Icon name={tabletIcon} />
              </div>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};