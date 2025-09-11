"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { TiArrowSortedDown } from "react-icons/ti";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { FaRegCircleUser } from "react-icons/fa6";

const Header = () => {
  const placeholders = [
    "Search 'sugar'",
    "Search 'snacks'",
    "Search 'milk'",
    "Search 'fruits'",
    "Search 'vegetables'",
  ];
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [cartItems] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
        setFade(true);
      }, 300);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sticky top-0 z-50 w-full bg-white ">
      <header className="w-full  mx-auto ">
        {/* === Desktop / large === */}
        <div className="hidden lg:flex items-center  gap-4">
          {/* Logo + address */}
          <div className="flex items-center ">
            <div className="p-7 border border-transparent border-r-gray-100">
              <Image
              src="/assets/logo/logo (2).png"
              alt="Blinkit Logo"
              width={112}
              height={40}
              className="w-28 h-auto"
            />
            </div>
            
            <div className="p-5">
              <h1 className="font-extrabold text-base">Delivery in 21 minutes</h1>
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <p>XXW8+RPF, Gopalapuram, Coim...</p>
                <TiArrowSortedDown size={18} />
              </div>
            </div>
          </div>

          {/* Search bar */}
          <div className="flex items-center w-[50%] h-12 rounded-2xl border border-gray-200 px-4">
            <CiSearch size={22} className="text-gray-500" />
            <div className="flex-1 px-3 relative overflow-hidden h-full flex items-center">
              <input
                type="text"
                className="absolute w-full outline-none text-sm bg-transparent"
                style={{
                  transform: fade ? "translateY(0%)" : "translateY(-100%)",
                  opacity: fade ? 1 : 0,
                  transition: "transform 0.3s ease, opacity 0.3s ease",
                }}
                placeholder={placeholders[placeholderIndex]}
              />
            </div>
          </div>

          {/* Login + cart */}
          <div className="flex items-center gap-6">
            <div className="cursor-pointer p-7">
              <p className="text-lg font-medium">Login</p>
            </div>
            <button
              disabled={cartItems === 0}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg transition text-white ${
                cartItems === 0
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-green-500 text-white hover:animate-wiggle"
              }`}
            >
              <HiOutlineShoppingCart size={22} />
              My Cart
            </button>
          </div>
        </div>

        {/* === Mobile / tablet === */}
        <div className="flex  w-full justify-between lg:hidden p-4">
          {/* Address */}
          <div>
            <h1 className="font-extrabold text-sm sm:text-base">
              Delivery in 21 minutes
            </h1>
            <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-600">
              <p>XXW8+RPF, Gopalapuram...</p>
              <TiArrowSortedDown size={14} />
            </div>
          </div>
          {/* Only user icon */}
          <div className="flex items-center">
            <FaRegCircleUser size={22} />
          </div>
        </div>

        {/* Search below icons */}
        <div className="px-4  lg:px-0">
          <div className="   flex lg:hidden items-center w-full h-12 rounded-2xl border border-gray-200 px-4">
          <CiSearch size={22} className="text-gray-500" />
          <div className="flex-1 px-3 relative overflow-hidden h-full flex items-center">
            <input
              type="text"
              className="absolute w-full outline-none text-sm bg-transparent"
              style={{
                transform: fade ? "translateY(0%)" : "translateY(-100%)",
                opacity: fade ? 1 : 0,
                transition: "transform 0.3s ease, opacity 0.3s ease",
              }}
              placeholder={placeholders[placeholderIndex]}
            />
          </div>
        </div>
        </div>
        
      </header>

      <style jsx>{`
        @keyframes wiggle {
          0%,
          100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-5px);
          }
          75% {
            transform: translateX(5px);
          }
        }
        .hover\\:animate-wiggle:hover {
          animation: wiggle 0.5s ease-in-out infinite;
          animation-iteration-count: 4;
        }
      `}</style>
    </div>
  );
};

export default Header;
