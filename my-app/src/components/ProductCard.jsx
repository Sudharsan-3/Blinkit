import Image from "next/image";
import React from "react";
import data from "../data/Products.json";

const ProductCard = () => {
  return (
    <div className="flex items-center justify-center">
      <div>

      </div>
      <div  className="grid grid-cols-10 w-7xl ">
        {data.map((item, id) => (
        <div
          key={id}
          className=" hover:cursor-pointer"
        >
          <Image
            src={item.image}
            alt={item.name || "Product"}
            width={160}
            height={160}
            className="rounded-md object-contain"
          />
    
        </div>
      ))}
      </div>
      <div></div>
      
    </div>
  );
};

export default ProductCard;
