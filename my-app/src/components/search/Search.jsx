"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { IoArrowBack, IoClose } from "react-icons/io5";
import { useRouter } from "next/navigation";

import Logo from "../../../public/assets/logo/logo (2).png";
import SearchResult from "./SearchResult";
import MySearchLoader from "../MySearchLoader";
import Link from "next/link";

const Search = () => {
  const [cartItems] = useState(0);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // 👇 track if this is the first render
  const firstRender = useRef(true);

  const handleInputChange = (value) => {
    setQuery(value);
  };

  const handleClear = () => setQuery("");

  useEffect(() => {
    // Skip on initial page load
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    // Only show loader when user types or clears
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="w-full">
      <div className="flex items-center gap-5 w-full">
        {/* Logo */}
        <div className="p-7 border border-transparent border-r-gray-100 hidden lg:block">
          <Link href={"/"}><Image src={Logo} alt="Logo" className="w-30" /></Link> 
        </div>

        {/* Search Bar */}
        <div className="flex-1">
          <div className="p-4 w-full">
            <div className="flex items-center w-full h-11 rounded-md border border-gray-200 px-4 shadow-sm">
              {/* Left icon */}
              <div className="flex-shrink-0">
                <IoArrowBack
                  onClick={() => router.push("/")}
                  className="text-gray-600 text-xl cursor-pointer block lg:hidden"
                />
                <CiSearch size={22} className="text-gray-500 hidden lg:block" />
              </div>

              {/* Input */}
              <div className="flex-1 px-3 relative overflow-hidden h-full flex items-center">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => handleInputChange(e.target.value)}
                  className="w-full outline-none text-sm bg-transparent"
                  placeholder="Search for atta dal and more"
                />
              </div>

              {/* Clear button */}
              {query && (
                <IoClose
                  onClick={handleClear}
                  className="text-gray-500 text-xl cursor-pointer block"
                />
              )}
            </div>
          </div>
        </div>

        {/* Cart button */}
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

      {/* Show loader or results */}
      {loading ? (
        <MySearchLoader />
      ) : query.length > 0 ? (
        <SearchResult query={query} />
      ) : null}
    </div>
  );
};

export default Search;
