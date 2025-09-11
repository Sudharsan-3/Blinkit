import Image from 'next/image';
import React from 'react';
import one from '../../public/assets/card0/1.png';
import two from '../../public/assets/card0/2.png';
import three from '../../public/assets/card0/3.png';

const Cards = () => {
  return (
    <div className="flex items-center justify-center px-4">
      <div className="w-full p-5  max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        <Image
          src={one}
          alt="Card 1"
          className="w-full h-auto object-contain"
        />
        <Image
          src={two}
          alt="Card 2"
          className="w-full h-auto object-contain"
        />
        <Image
          src={three}
          alt="Card 3"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Cards;
