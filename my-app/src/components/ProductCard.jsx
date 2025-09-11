import Image from "next/image";
import React from "react";
import data from "../data/Products.json";

const ProductCard = () => {
  return (
    <div className="flex items-center justify-center px-4">
      <div className="w-full max-w-7xl">
        {/* Desktop: 10 columns, Small screens: 4 columns */}
        <div className="grid grid-cols-4 lg:grid-cols-10 gap-4">
          {data.map((item, id) => (
            <div
              key={id}
              className="hover:cursor-pointer flex flex-col items-center"
            >
              <Image
                src={item.image}
                alt={item.name || "Product"}
                width={160}
                height={160}
                className="rounded-md object-contain w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
