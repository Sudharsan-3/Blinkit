import Image from 'next/image';
import React from 'react';
import banner from '../../public/assets/banner/banner.png';

const Banner = () => {
  return (
    <div className="flex justify-center items-center px-4">
      <div className="w-full max-w-7xl flex items-center justify-center">
        {/* Responsive Image */}
        <Image
          src={banner}
          alt="banner"
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </div>
  );
};

export default Banner;
