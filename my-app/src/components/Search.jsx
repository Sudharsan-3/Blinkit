"use client";

import Image from "next/image";
import React, { useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";

import Logo from "../../public/assets/logo/logo (2).png";

const Search = () => {
  const [cartItems] = useState(0);

  return (
    <div className="w-full">
      <div className="flex items-center gap-5 w-full">
        {/* Logo — hidden on md and below */}
        <div className="p-7 border border-transparent border-r-gray-100 hidden lg:block">
          <Image src={Logo} alt="Logo" className="w-30" />
        </div>

        {/* Search Bar — always visible */}
        <div className="flex-1">
          <div className="p-4 w-full">
            <div className="flex items-center w-full h-11 rounded-md border border-gray-200 px-4 shadow-sm">
              <CiSearch size={22} className="text-gray-500" />
              <div className="flex-1 px-3 relative overflow-hidden h-full flex items-center">
                <input
                  type="text"
                  className="absolute w-full outline-none text-sm bg-transparent"
                  placeholder={"Search for atta dal and more"}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Cart button — hidden on md and below */}
        <div className="hidden lg:block p-5">
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
    </div>
  );
};

export default Search;
