import React from "react";
import Link from "next/link";
import { Button, ButtonProps } from "@mui/material";
import { SiTiktok } from "react-icons/si";

interface TikTokButtonProps extends Omit<ButtonProps, "href"> {
  href: string;
  width?: string;
  height?: string;
  text?: string;
  iconSize?: number;
  className?: string;
}

const TikTokButton: React.FC<TikTokButtonProps> = ({
  href,
  width = "300px",
  height = "48px",
  text = "Coba aroma ini",
  iconSize = 28,
  className = "",
  ...props
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      <div
        className={`inline-block p-[1.79px] bg-gradient-to-r from-[#EA2C89] to-[#01EDE6] rounded-[15px] tablet:rounded-[17.95px] ${className}`}
      >
        <Button
          type="button"
          variant="outlined"
          className="items-center justify-center flex flex-row gap-[8px]"
          sx={{
            width: `calc(${width} - 3.58px)`,
            height: `calc(${height} - 3.58px)`,
            border: "none",
            backgroundColor: "#212121",
            borderRadius: "13.21px",
            py: "19px",
            px: "24px",
            textTransform: "none",
            fontSize: "16px",
            lineHeight: "28px",
            "@media (min-width: 768px)": {
              borderRadius: "16.16px",
              py: "8px",
              px: "20px",
            },
            "&:hover": {
              backgroundColor: "#333333",
              border: "none",
            },
            ...props.sx,
          }}
          {...props}
        >
          <SiTiktok color="#f8f8f8" size={iconSize} />
          {text && (
            <div className="text-[16px] leading-[28px] text-[#f8f8f8] text-center">
              {text}
            </div>
          )}
        </Button>
      </div>
    </Link>
  );
};

export default TikTokButton;
