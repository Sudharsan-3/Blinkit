import Image from 'next/image';
import React from 'react';

const Cards = ({ data }) => {
  // filter only card type
  const fil = data.filter((e) => e.type === 'card');

  return (
    <div className="flex items-center justify-center">
      {/* hide on md and below, show only on lg */}
      <div className="hidden lg:block w-full max-w-7xl sm:px-2 lg:px-4 py-5">
        {/* Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {fil.map((item, i) => (
            <Image
              key={i}
              src={item.image}
              alt={`Card ${i + 1}`}
              width={600}
              height={400}
              className="w-full h-auto object-contain hover:cursor-pointer"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
