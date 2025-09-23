// components/Cart.jsx
"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GiStopwatch } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import CartProducts from "./CartProducts";
import BillDetails from "./BillDetails";
import CancellationPolicy from "./CancellationPolicy";

// ✅ import the action
import { pickUpOption } from "../../Redux/features/CartSlice"; // adjust path as needed

const Cart = ({ onClose }) => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalSavings, pickUp } = useSelector(
    (state) => state.cart
  );

  return (
    <div className="bg-gray-100 h-full overflow-y-auto">
      <div className="w-full">
        {/* Header */}
        <div className="flex items-center justify-between p-5 font-bold">
          <h1 className="text-lg">My Cart</h1>
          <button onClick={onClose}>
            <IoMdClose size={22} />
          </button>
        </div>

        {/* Savings banner */}
        {totalSavings > 0 && (
          <div className="flex items-center px-3 pb-3">
            <div className="flex items-center p-2 rounded-2xl font-semibold text-blue-500 bg-blue-100 w-full justify-between">
              <span>Your total savings</span>
              <span>₹{totalSavings}</span>
            </div>
          </div>
        )}

        {/* Items block */}
        <div className="p-2">
          <div className="bg-white rounded-2xl shadow">
            {/* Delivery info only if not pickup */}
            {!pickUp && (
              <div className="flex items-center p-5 gap-5">
                <div className="bg-gray-100 p-3 rounded-2xl">
                  <GiStopwatch size={32} />
                </div>
                <div>
                  <p className="font-bold text-sm">Delivery in 21 minutes</p>
                  <p className="text-xs text-gray-500">
                    Shipment of {totalQuantity} item{totalQuantity > 1 && "s"}
                  </p>
                </div>
              </div>
            )}

            {/* Pickup / Delivery selection */}
            <div className="flex gap-5 items-center justify-between px-5 py-3">
              {/* Delivery option */}
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="deliveryOption"
                  checked={!pickUp}  // always controlled
                  onChange={() => dispatch(pickUpOption(false))}
                />
                <label className="text-sm">Delivery</label>
              </div>

              {/* Pickup option */}
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="deliveryOption"
                  checked={pickUp}   // always controlled
                  onChange={() => dispatch(pickUpOption(true))}
                />
                <label className="text-sm">Pick Up</label>
              </div>
            </div>

            {/* Products */}
            <CartProducts items={items} totalQuantity={totalQuantity} />
          </div>
        </div>

        {/* Bill */}
        <BillDetails />

        <CancellationPolicy />
      </div>
    </div>
  );
};

export default Cart;
