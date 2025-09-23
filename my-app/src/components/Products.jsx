"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { LuTimer } from "react-icons/lu";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, clearCart  } from "@/Redux/features/CartSlice"




const Products = ({ data = [] }) => {
  const scrollerRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const dispatch = useDispatch();

  // ✅ get items array from cart slice
  const cartItems = useSelector((state) => state.cart.items);
  

  // const cart = useSelector((state) => state.cart.totalQuantity);

  /** measure card width + arrows */
  const updateMeasurements = () => {
    const s = scrollerRef.current;
    if (!s) return;

    const containerW = s.clientWidth || 0;
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);

    // 2 cards per screen on mobile, 6 on desktop
    setCardWidth(mobile ? containerW / 2 - 12 : containerW / 6 - 12);

    const maxScroll = s.scrollWidth - s.clientWidth;
    setShowRight(maxScroll > 5);
    setShowLeft(s.scrollLeft > 5);
  };

  const onScroll = () => {
    const s = scrollerRef.current;
    if (!s) return;
    const { scrollLeft, scrollWidth, clientWidth } = s;
    const maxScroll = scrollWidth - clientWidth;

    setShowLeft(scrollLeft > 5);
    setShowRight(scrollLeft < maxScroll - 5);
  };

  useEffect(() => {
    updateMeasurements();

    const ro =
      typeof ResizeObserver !== "undefined" && scrollerRef.current
        ? new ResizeObserver(updateMeasurements)
        : null;
    if (ro && scrollerRef.current) ro.observe(scrollerRef.current);
    else window.addEventListener("resize", updateMeasurements);

    const s = scrollerRef.current;
    if (s) s.addEventListener("scroll", onScroll);

    const t = setTimeout(updateMeasurements, 300);

    return () => {
      if (ro && scrollerRef.current) ro.unobserve(scrollerRef.current);
      else window.removeEventListener("resize", updateMeasurements);
      if (s) s.removeEventListener("scroll", onScroll);
      clearTimeout(t);
    };
  }, [data.length]);

  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

  const handleScroll = (dir) => {
    const s = scrollerRef.current;
    if (!s || cardWidth <= 0) return;

    const scrollAmount = isMobile ? cardWidth * 2 : cardWidth * 6;
    const { scrollLeft, scrollWidth, clientWidth } = s;
    const maxScroll = scrollWidth - clientWidth;

    let target =
      dir === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
    target = Math.round(clamp(target, 0, maxScroll));

    s.scrollTo({ left: target, behavior: "smooth" });
  };

  return (
    <div className="relative w-full hover:cursor-pointer">
      {/* hide scrollbar */}
      <style jsx>{`
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Left arrow */}
      {!isMobile && showLeft && (
        <button
          onClick={() => handleScroll("left")}
          aria-label="previous"
          className="absolute hover:cursor-pointer left-2 top-1/2 z-30 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <FaChevronLeft size={16} />
        </button>
      )}

      {/* Products scroller */}
      <div
        ref={scrollerRef}
        className="no-scrollbar flex gap-3 py-2 overflow-x-auto scroll-smooth"
      >
        {data.length > 0 ? (
          data.map((item) => {
            const hasOffer = item.offer && item.offer > 0;
            const discounted = hasOffer
              ? (item.price - (item.price * item.offer) / 100).toFixed(1)
              : item.price;

            const w = cardWidth || 170;

            // ✅ find this product in the cart
            const cartItem = cartItems.find((c) => c.id === item.id);

            // ✅ get its quantity (or 0 if not found)
            const quantity = cartItem?.quantity || 0;

            return (
              <div
                key={item.id}
                style={{ minWidth: `${w}px`, maxWidth: `${w}px` }}
                className={`relative flex-shrink-0 rounded-md overflow-hidden ${!isMobile ? "p-2 bg-white  border border-gray-100 shadow-sm hover:shadow-md" : "p-2 bg-white "
                  }`}
              >
                <Link href={{
                  pathname: "/detailOfProducts",
                  query: { id: item.id } // or whatever property you want
                }} >
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

                  {/* Image with shadow on mobile */}
                  <div
                    className={`flex items-center justify-center ${isMobile ? "shadow-lg rounded-md p-2" : "h-32"
                      }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={120}
                      height={120}
                      className="object-contain"
                    />
                  </div>
                </Link>
                {/* Remaining card info (name, qty, timer, price, add) */}
                <div className="mt-2">
                  <Link href={{
                    pathname: "/detailOfProducts",
                    query: { id: item.id } // or whatever property you want
                  }} >
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
                        lineHeight: "1.2rem",          // your line-height (sm ~1.25rem)
                        minHeight: "2.4rem",           // 2 × lineHeight ensures two-line space
                      }}
                    >
                      {item.name}
                    </div>
                  </Link>

                  {item.qty && <div className="text-xs text-gray-500">{item.qty}</div>}

                  <div className="mt-2 flex items-center justify-between">
                    <Link href={{
                      pathname: "/detailOfProducts",
                      query: { id: item.id } // or whatever property you want
                    }} >
                      <div className="flex flex-col items-center justify-center min-h-[32px]">
                        {item.offer > 0 ? (
                          <>
                            <div className="text-sm font-semibold">₹{discounted}</div>
                            <div className="text-xs text-gray-400 line-through">₹{item.price}</div>
                          </>
                        ) : (
                          <div className="text-sm font-semibold">₹{item.price}</div>
                        )}
                      </div></Link>
                    <div>
                      {quantity === 0 ? (
                        <button
                          onClick={() => dispatch(addToCart(item))}
                          className="ml-2 hover:cursor-pointer border border-green-600 text-green-600 text-xs px-6 py-2 rounded  transition-colors"
                          style={{ height: "32px" }}
                          aria-label={`Add ${item.name}`}
                        >
                          ADD
                        </button>
                      ) : (
                        <div className="flex items-center justify-center gap-3 ml-2 hover:cursor-pointer border border-green-600 text-white text-sm px-2 py-1.5 rounded bg-green-600  transition-colors">
                          <div onClick={() => dispatch(removeFromCart(item.id))}>
                            <FiMinus />
                          </div>
                          <p>{quantity}</p>
                          <div onClick={() => dispatch(addToCart(item))}>
                            <IoMdAdd />
                          </div>
                        </div>
                      )}



                    </div>

                  </div>
                </div>
              </div>

            );
          })
        ) : (
          <div className="text-sm text-gray-500">No products</div>
        )}
      </div>

      {/* Right arrow */}
      {!isMobile && showRight && (
        <button
          onClick={() => handleScroll("right")}
          aria-label="next"
          className="absolute hover:cursor-pointer right-2 top-1/2 z-30 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <FaChevronRight size={16} />
        </button>
      )}
    </div>
  );
};

export default Products;
