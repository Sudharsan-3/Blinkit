"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import data from "../../data/Fliters.json";


const Filter = ({ category, setType }) => {

   


  const filtered = data.filter(
    (e) => e.category.toLowerCase() === category.toLowerCase()
  );
  const limited = filtered.slice(0, 6);

  const [openId, setOpenId] = useState(null);

  // ✅ set first item as active on mount or when category changes
  useEffect(() => {
    if (limited.length > 0) {
      setOpenId(limited[0].id);
      setType(limited[0].type);
    }
  }, [category]); // re-run when category changes

  const handleClick = (type,id) => {
    setOpenId(id); // directly set clicked one as active
    setType(type);
  };

  return (
    <div>
      <div className="flex flex-col w-24 max-h-140 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
        {limited.map((e) => (
          <div
            onClick={() => handleClick(e.type,e.id)}
            key={e.id}
            className={`flex flex-col items-center justify-start w-20 p-2 mb-3 cursor-pointer transition-colors
            ${
              openId === e.id
                ? "border-r-4 border-green-600 bg-green-50"
                : "border-r-4 border-transparent"
            }`}
          >
            {/* Image */}
            <div className="w-full h-15 overflow-hidden bg-gray-50 rounded-md shadow">
              <Image
                src={e.image}
                alt={e.name || "Product"}
                width={35}
                height={35}
                className={`object-contain h-auto mx-auto transform transition-transform duration-500 ${
                  openId === e.id ? "translate-y-0" : "translate-y-2/4"
                }`}
              />
            </div>
            {/* Text */}
            <h1
              className={`text-xs text-center font-medium mt-1 ${
                openId === e.id
                  ? "text-green-700 font-semibold"
                  : "text-gray-700"
              }`}
            >
              {e.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
