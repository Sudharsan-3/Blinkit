"use client"
import React from 'react';
import All from "../../data/AllProducts.json";
import FCard from './FCard';
import Notfounded from '../search not founded/Notfounded';

const FilterProducts = ({ type, category }) => {
  // Filter products
  const data = All.filter(
    (e) => (e.category.toLowerCase() === category && e.type === type)
  );
  console.log(data,type,category)

  return (
    // The flex-1 wrapper already gives full width
    <div className="flex-1 overflow-y-auto max-h-[130vh] pl-2">
      {/* Fixed-width inner container so both states look same */}
      <div className="w-full">
        {data.length > 0 ? (
          <FCard data={data} />
        ) : (
          // make empty state fill width & height like grid area
          <div className="lg:w-5xl md:3xl: sm:w-full flex items-center justify-center max-h-[35rem] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            <Notfounded />
           
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterProducts;
