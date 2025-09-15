import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MySearchLoader = () => {
  return (
    <div className="flex items-center justify-center p-2">
         <div className="w-7xl">
      {/* Optional: show a skeleton for search bar */}
      <div className="mb-4">
        <Skeleton height={40} width="100%" />
        <Skeleton height={40} width="100%" />
        <Skeleton height={40} width="100%" />
      </div>

      {/* Product card skeleton grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="rounded-lg border border-gray-100 p-3 shadow-sm"
          >
            {/* Image skeleton */}
            <Skeleton height={120} className="mb-3 rounded-md" />

            {/* Product title */}
            <Skeleton height={15} width="80%" className="mb-2" />
            {/* Product price */}
            <Skeleton height={15} width="40%" className="mb-2" />
            {/* Add to cart button */}
            <Skeleton height={30} width="60%" />
          </div>
        ))}
      </div>
    </div>
    </div>
   
  );
};

export default MySearchLoader;
