// components/Cart.jsx
"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GiStopwatch } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import CartProducts from "./CartProducts";
import BillDetails from "./BillDetails";
import CancellationPolicy from "./CancellationPolicy";

const Cart = ({ onClose }) => { // <---- receive onClose prop
  const dispatch = useDispatch();
  const { items, totalQuantity, totalSavings } = useSelector(
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
        {
          totalSavings > 0?(<div className="flex items-center px-3 pb-3">
          <div className="flex items-center p-2 rounded-2xl font-semibold text-blue-500 bg-blue-100 w-full justify-between">
            <span>Your total savings</span>
            <span>₹{totalSavings}</span>
          </div>
        </div>):("")
        }
        

        {/* Items block */}
        <div className="p-2">
          <div className="bg-white rounded-2xl shadow">
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


