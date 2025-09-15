"use client";
import React from "react";
import Image from "next/image";
import { LuTimer } from "react-icons/lu";

const SearchCard = ({ data = [] }) => {
  return (
    <div className="flex items-center justify-center">
         <div className="w-6xl lg:p-0 hover:cursor-pointer">
        
      {data.length > 0 ? (
        <div
          className="
            grid 
            grid-cols-2 
            md:grid-cols-4 
            lg:grid-cols-6 
            gap-4 
            justify-items-center
          "
        >
          {data.map((item) => {
            const hasOffer = item.offer && item.offer > 0;
            const discounted = hasOffer
              ? Math.round(item.price - (item.price * item.offer) / 100)
              : item.price;

            return (
              <div
                key={item.id}
                className="relative w-full max-w-[180px] bg-white border border-gray-100 shadow-sm hover:shadow-md rounded-md overflow-hidden p-2"
              >
                {/* Offer badge */}
                {item.offer > 0 && (
                              <div className="absolute top-0 left-2">
                                <div className="relative flex items-center justify-center">
                                  {/* SVG background */}
                                  <svg
                                    width="60"
                                    height="30"
                                    viewBox="0 0 29 28"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-14 h-8"
                                  >
                                    <path
                                      d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z"
                                      fill="#256fef"
                                    />
                                  </svg>
                                  {/* Text inside */}
                                  <div className="absolute inset-0 flex flex-col items-center justify-center leading-tight">
                                    <span className="text-[12px] text-white font-bold">{item.offer}%</span>
                                    <span className="text-[10px] text-white font-semibold">OFF</span>
                                  </div>
                                </div>
                              </div>
                            )}

                {/* Image */}
                <div className="flex items-center justify-center h-32">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>

                {/* Info */}
                <div className="mt-2">
                  {item.timin && (
                    <div className="inline-flex items-center bg-gray-100 text-xs px-2 py-0.5 rounded">
                      <LuTimer size={12} />
                      <span className="ml-1">{item.timin}</span>
                    </div>
                  )}

                  <div
                    className="text-sm font-medium leading-tight overflow-hidden mt-2"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {item.name}
                  </div>

                  {item.qty && (
                    <div className="text-xs text-gray-500">{item.qty}</div>
                  )}

                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex flex-col items-center justify-center min-h-[32px]">
                      {hasOffer ? (
                        <>
                          <div className="text-sm font-semibold">
                            ₹{discounted}
                          </div>
                          <div className="text-xs text-gray-400 line-through">
                            ₹{item.price}
                          </div>
                        </>
                      ) : (
                        <div className="text-sm font-semibold">
                          ₹{item.price}
                        </div>
                      )}
                    </div>
                    <button
                      className="ml-2 hover:cursor-pointer border border-green-600 text-green-600 text-xs px-3 py-2 rounded hover:bg-green-600 hover:text-white transition-colors"
                      style={{ height: "32px" }}
                      aria-label={`Add ${item.name}`}
                    >
                      ADD
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center text-gray-500 py-8">No products</div>
      )}
    </div>
    </div>
   
  );
};

export default SearchCard;
