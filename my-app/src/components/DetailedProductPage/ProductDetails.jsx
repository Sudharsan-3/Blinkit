import React from "react";
import Link from "next/link";
import { LuTimer } from "react-icons/lu";
import WhyBuyInBlinkit from "../Extra/WhyBuyInBlinkit";
import { RiShareForwardLine } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, clearCart } from "@/Redux/features/CartSlice"


/**
 * Expects data with:
 *  - name, brand, category, price, offer (percent) or off, qty
 */
const ProductDetails = ({ data }) => {

  const dispatch = useDispatch();

  // ✅ get items array from cart slice
  const cartItems = useSelector((state) => state.cart.items);



  // ✅ find this product in the cart
  const cartItem = cartItems.find((c) => c.id === data.id);

  // ✅ get its quantity (or 0 if not found)
  const quantity = cartItem?.quantity || 0;

  if (!data) return null;

  const originalPrice = Number(data.price || 0);
  const offerPercent = Number(data.offer ?? data.off ?? 0);

  const discountedPrice =
    offerPercent > 0 ? originalPrice - (originalPrice * offerPercent) / 100 : originalPrice;

  return (
    <div className="bg-white w-full h-full p-6">
      <div>
        {/* breadcrumb */}
        <div className="hidden flex-wrap text-sm text-gray-500 mb-3 lg:flex">
          <Link href="/">
            <span className="hover:underline cursor-pointer">Home</span>
          </Link>
          <span className="mx-1">/</span>
          <Link
            href={{
              pathname: "/filter",
              query: { category: data.category?.toLowerCase() },
            }}
          >
            <span className="hover:underline cursor-pointer">{data.category}</span>
          </Link>
          <span className="mx-1">/</span>
          <span className="text-gray-700">{data.name}</span>
        </div>

        {/* name */}
        <div className=" flex items-center justify-between">
          <h1 className="text-xl font-bold mb-2">{data.name}</h1>
          <div className="hidden sm:block md:hidden py-3 px-3 rounded-full border border-gray-100 shadow-sm">
            <RiShareForwardLine size={20} />

          </div>
        </div>

        <div className="flex items-center bg-gray-100 w-fit">
          <LuTimer size={12} />
          <h1 className="text-xs  w-fit p-0.5">{data.timin}</h1>
        </div>
        <hr className="border-gray-300" />


        {/* brand */}
        {data.brand && (
          <Link href={{ pathname: "/brand", query: { brand: data.brand } }}>
            <span className="text-green-600 hover:underline text-sm">{data.brand}</span>
          </Link>
        )}
        <hr className="border-gray-300" />
        {/* price + qty + add to cart */}
        <div className="mt-4 flex items-center justify-between">
          <div>
            <div className="flex flex-col items-start space-x-3">
              {data.qty && <span className="text-sm text-gray-600 ml-2">{data.qty}</span>}

              {offerPercent > 0 ? (
                <div className=" flex gap-2">
                  <span className="text-xs font-semibold text-green-600">
                    ₹{discountedPrice.toFixed(2)}
                  </span>
                  <span className="line-through text-gray-400 text-xs">
                    MRP ₹{originalPrice.toFixed(2)}
                  </span>
                  <span className="text-xs font-extrabold rounded text-white bg-blue-500 p-0.5">{offerPercent}% OFF</span>
                </div>
              ) : (
                <span className="text-xs font-semibold">₹{originalPrice.toFixed(2)}</span>
              )}


            </div>

            <span className="text-xs text-gray-400">(Includes all taxes)</span>
          </div>

          {quantity === 0 ? (
  <button
    onClick={() => dispatch(addToCart(data))}
    className="ml-2 hover:cursor-pointer border border-green-600 text-green-600 text-xs px-2 py-2 rounded  transition-colors"
    style={{ height: '32px' }}
    aria-label={`Add ${data.name}`}
  >
    ADD to cart
  </button>
) : (
  <div className="flex items-center justify-center gap-3 ml-2 hover:cursor-pointer border border-green-600 text-white text-sm px-2 py-1.5 rounded bg-green-600 transition-colors">
    <div onClick={() => dispatch(removeFromCart(data.id))}>
      <FiMinus />
    </div>
    <p>{quantity}</p>
    <div onClick={() => dispatch(addToCart(data))}>
      <IoMdAdd />
    </div>
  </div>
)}

        </div>
      </div>

      <div>
        <WhyBuyInBlinkit />
      </div>
    </div>
  );
};

export default ProductDetails;
