import React from 'react';
import Link from 'next/link';
import { Button, ButtonProps } from '@mui/material';
import { SiShopee } from "react-icons/si";

interface ShopeeButtonProps extends Omit<ButtonProps, 'href'> {
  href: string;
  width?: string;
  height?: string;
  text?: string;
  iconSize?: number;
  className?: string;
}

const ShopeeButton: React.FC<ShopeeButtonProps> = ({
  href,
  width = '300px',
  height = '48px',
  text = 'Coba aroma ini',
  iconSize = 28,
  className = '',
  ...props
}) => {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
      <Button
        type="button"
        variant="outlined"
        className={`items-center justify-center flex flex-row gap-[8px] ${className}`}
        sx={{
          width,
          height,
          borderColor: '#B6270A',
          backgroundColor: '#EE4D2D', 
          borderWidth: '1.79px',
          borderRadius: '15px',
          py: '12px',
          px: '24px',
          textTransform: 'none',
          fontSize: '16px', 
          lineHeight: '28px',
          '@media (min-width: 768px)': {
            borderWidth: '1.79px',
            borderRadius: '17.95px',
            py: '8px',
            px: '20px',
          },
          '&:hover': {
            borderColor: '#8E1E06',
            backgroundColor: '#C13B1A',
          },
          ...props.sx
        }}
        {...props}
      >
        <SiShopee color="#f8f8f8" size={iconSize} />
        {text && (
          <div className="text-[16px] leading-[28px] text-[#f8f8f8] text-center">{text}</div>
        )}
      </Button>
    </Link>
  );
};

export default ShopeeButton;