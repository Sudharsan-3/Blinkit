"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../../public/assets/logo/logo (2).png";
import { TiArrowSortedDown } from "react-icons/ti";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";

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
    <div className="sticky top-0 z-50 w-full">
      <header className="flex flex-wrap items-center justify-between px-5 py-3 shadow-sm bg-white">
        {/* Logo */}
        <div className="py-3 px-6 border-r border-gray-200">
  <Image
    src="/assets/logo/logo (2).png"  // no /public here
    alt="Blinkit Logo"
    width={112}                      // add width
    height={40}                      // add height
    className="w-28 h-auto"          // optional Tailwind classes
  />
</div>


        {/* Address selection */}
        <div className="px-6 py-3">
          <h1 className="font-extrabold text-base">Delivery in 21 minutes</h1>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <p>XXW8+RPF, Gopalapuram, Coim...</p>
            <TiArrowSortedDown />
          </div>
        </div>

        {/* Search bar */}
        <div className="flex items-center w-full sm:w-[48%] h-12 rounded-2xl border border-gray-200 px-4 mt-3 sm:mt-0">
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

        {/* Login & Cart */}
        <div className="flex items-center gap-6 mt-3 sm:mt-0">
          {/* Login */}
          <div className="py-3 h-full cursor-pointer">
            <p className="text-lg font-medium">Login</p>
          </div>

          {/* Cart */}
          <button
            disabled={cartItems === 0}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition ${
              cartItems === 0
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-green-500 text-white hover:animate-wiggle"
            }`}
          >
            <HiOutlineShoppingCart size={22} />
            My Cart
          </button>
        </div>
      </header>

      {/* Cart wiggle animation */}
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