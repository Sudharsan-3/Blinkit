'use client';
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import Filter from './Filter';
import FilterProducts from './FilterProducts';
import data from '../../data/AllProducts.json';
import Details from './Details';

const ProductsFiltered = () => {
  const [type, setType] = useState(1);
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const findProducts = data.filter(
    (e) => e.category.toLowerCase() === category
  );

  return (
    <div className="p-2">
      <div className="flex items-start justify-center">
        {/* main wrapper */}
        <div className="w-full max-w-6xl">
          {/* heading at the top of the same container */}
          {findProducts.length > 0 && (
            <h1 className="text-base sm:text-lg md:text-xl font-semibold mb-3">
              Buy {category[0].toUpperCase() + category.slice(1)} online
            </h1>
          )}

          <div className="flex flex-row items-center justify-center">
            {/* Filter always on left */}
            <div
              className="
                w-[90px] sm:w-[110px] md:w-[120px] lg:w-[130px]
                overflow-y-auto max-h-[110vh]
              "
            >
              <Filter category={category} setType={setType} />
            </div>

            {/* Products always on right */}
            <div className="flex-1  max-h-[110vh] pl-2">
              <FilterProducts category={category} type={type} />
            </div>
          </div>
          <div>
            <Details />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsFiltered;
