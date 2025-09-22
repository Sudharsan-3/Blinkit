"use client";
import React from "react";
import Image from "next/image";
import { LuTimer } from "react-icons/lu";
import Notfounded from "../search not founded/Notfounded";
import Link from "next/link";
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from "@/Redux/features/CartSlice"

const FCard = ({ data = [] }) => {
  const dispatch = useDispatch();

  // ✅ get items array from cart slice
  const cartItems = useSelector((state) => state.cart.items);

 

  return (
    <div className="w-full max-h-[35rem] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent hover:cursor-pointer">
      {data.length > 0 ? (
        <div
          className="
            grid 
            grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-6 
            gap-4 
            items-start
          "
        >
          {data.map((item) => {
            const hasOffer = item.offer && item.offer > 0;
            const discounted = hasOffer
              ? Math.round(item.price - (item.price * item.offer) / 100)
              : item.price;

               // ✅ find this product in the cart
            const cartItem = cartItems.find((c) => c.id === item.id);

            // ✅ get its quantity (or 0 if not found)
            const quantity = cartItem?.quantity || 0;

            return (
              <div
                key={item.id}
                className="relative w-full bg-white border border-gray-100 shadow-sm hover:shadow-md rounded-md overflow-hidden p-2"
              >
                <Link href={{
                  pathname: "/detailOfProducts",
                  query: { id: item.id } // or whatever property you want
                }} >

                  {item.offer > 0 && (
                    <div className="absolute top-0 left-2">
                      <div className="relative flex items-center justify-center">
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
                </Link>
                {/* Offer badge */}


                {/* Info */}
                <div className="mt-2">
                  {item.timin && (
                    <div className="inline-flex items-center bg-gray-100 text-xs px-2 py-0.5 rounded">
                      <LuTimer size={12} />
                      <span className="ml-1">{item.timin}</span>
                    </div>
                  )}
                  <Link href={{
                    pathname: "/detailOfProducts",
                    query: { id: item.id } // or whatever property you want
                  }} >
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

                  {item.qty && (
                    <div className="text-xs text-gray-500">{item.qty}</div>
                  )}

                  <div className="mt-2 flex items-center justify-between">
                    <Link href={{
                      pathname: "/detailOfProducts",
                      query: { id: item.id } // or whatever property you want
                    }} >
                      <div className="flex flex-col items-center justify-center min-h-[32px]">
                        {hasOffer ? (
                          <>
                            <div className="text-sm font-semibold">₹{discounted}</div>
                            <div className="text-xs text-gray-400 line-through">
                              ₹{item.price}
                            </div>
                          </>
                        ) : (
                          <div className="text-sm font-semibold">₹{item.price}</div>
                        )}
                      </div>
                    </Link>
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
          })}
        </div>
      ) : (
        <div className="w-full max-h-[35rem] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          <Notfounded />
        </div>
      )}
    </div>
  );
};

export default FCard;
