import React from "react";
import Link from "next/link";
import { Icon } from "@/components/icons";

interface TikTokButtonProps {
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

export const TikTokButton: React.FC<TikTokButtonProps> = ({
  href,
  width = "w-full",
  height = "h-auto",
  className = "",
  px = "px-[24px]",
  py = "py-[12px]",
  pt,
  pb,
  mobileIcon = "tiktokshopbutton",
  tabletIcon = "tiktokshopbutton",
  showMobileOnTablet = false,
  tabletWidth = "",
  tabletHeight = "",
  tabletPt = "",
  tabletPb = "",
  tabletPy = "",
  tabletPx = "",
  pcPt = "",
  pcPb = "",
  pcPy = "",
  pcPx = "",
}) => {
  const paddingY = pt || pb ? "" : py;
  const paddingTop = pt || "";
  const paddingBottom = pb || "";

  const tabletPaddingY = tabletPt || tabletPb ? "" : tabletPy;
  const tabletPaddingTop = tabletPt || "";
  const tabletPaddingBottom = tabletPb || "";

  const pcPaddingY = pcPt || pcPb ? "" : pcPy;
  const pcPaddingTop = pcPt || "";
  const pcPaddingBottom = pcPb || "";

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={width}
    >
      <div
        className={`flex flex-col w-full ${height} rounded-[1000px] p-[1.79px] bg-gradient-to-r from-[#EA2C89] to-[#01EDE6] gap-[8px] 
        ${className}`}
      >
        <div
          className={`flex flex-col w-full h-full rounded-[1000px] bg-[#212121] 
          ${px} ${paddingY} ${paddingTop} ${paddingBottom} 
          tablet:${tabletWidth} tablet:${tabletHeight} tablet:${tabletPx} tablet:${tabletPaddingY} tablet:${tabletPaddingTop} tablet:${tabletPaddingBottom}
          pc:${pcPx} pc:${pcPaddingY} pc:${pcPaddingTop} pc:${pcPaddingBottom}
          items-center justify-center`}
        >
          <div className="w-full h-[21.76px] tablet:w-full tablet:h-[30px] px-[7.7px] tablet:px-[10.3px] flex items-center justify-center">
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
      </div>
    </Link>
  );
};
