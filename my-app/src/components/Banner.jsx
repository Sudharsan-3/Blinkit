import Image from 'next/image';
import React from 'react';

const Banner = ({ data }) => {
  // Filter the images based on type
  const dis = data.filter((e) => e.type === 'banner-distop'); // desktop banners
  const mob = data.filter((e) => e.type === 'banner-mobile'); // mobile banners

  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-7xl flex items-center justify-center">
        {/* Desktop Banner */}
        {dis.length > 0 && (
          <Image
            src={dis[0].image} // first desktop banner
            alt="Desktop Banner"
            width={1920}
            height={500}
            className="hidden lg:block w-full h-auto object-contain hover:cursor-pointer"
            priority
          />
        )}

        {/* Mobile Banner */}
        {mob.length > 0 && (
          <Image
            src={mob[0].image} // first mobile banner
            alt="Mobile Banner"
            width={600}
            height={300}
            className="block lg:hidden w-full p-4 h-auto object-contain"
            priority
          />
        )}
      </div>
    </div>
  );
};

export default Banner;
