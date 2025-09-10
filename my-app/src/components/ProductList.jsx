import React from "react";
import Products from "./Products";

const ProductList = ({ title, data }) => {
  return (
    <div className="flex items-center justify-center hover:cursor-pointer">
      <div className="w-7xl p-2">
         <div >
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-semibold font-sans">{title}</h1>
          <p className="text-green-600 hover:underline cursor-pointer">See all</p>
        </div>

        {/* ✅ pass data here */}
        <Products data={data} />
      </div>
      </div>
     
    </div>
  );
};

export default ProductList;
