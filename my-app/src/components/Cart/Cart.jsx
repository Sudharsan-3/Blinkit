"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GiStopwatch } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { BsInfoLg } from "react-icons/bs";
import CartProducts from "./CartProducts";
import BillDetails from "./BillDetails";
import CancellationPolicy from "./CancellationPolicy";
import PopUps from "../PopUp/PopUps";
import { pickUpOption } from "../../Redux/features/CartSlice";

const Cart = ({ onClose }) => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalSavings, pickUp, pickupDiscount } =
    useSelector((state) => state.cart);

  const [openInfo, setOpenInfo] = useState(false);
  const [type, setType] = useState(false);
  const [loading, setLoading] = useState(false); // ✅ new loading state

  const handleDeliveryChange = (isPickup) => {
    setLoading(true);
    dispatch(pickUpOption(isPickup));
  };

  // stop loading automatically when pickUp changes
  useEffect(() => {
    if (loading) setLoading(false);
  }, [pickUp]);

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
            {!pickUp ? (
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
            ) : (
              <div className="flex items-center p-5 gap-5">
                <div className="bg-gray-100 p-3 rounded-2xl">
                  <GiStopwatch size={32} />
                </div>
                <div>
                  <p className="font-bold text-sm">Changed to pick up</p>
                  <p className="text-xs text-gray-500">
                    Shipment of {totalQuantity} item{totalQuantity > 1 && "s"}
                  </p>
                </div>
              </div>
            )}

            {/* Pickup / Delivery selection */}
            <div>
              <div className="flex items-center gap-5 px-4 pt-2">
                <h1>Delivery type</h1>
                <div
                  onClick={() => (setOpenInfo(true), setType("DeliveryType"))}
                  className="border border-gray-100 shadow-sm rounded-full hover:cursor-pointer p-1"
                >
                  <BsInfoLg className="text-gray-400" size={12} />
                </div>
                <div className="text-xs">
                  {pickupDiscount > 0 ? (
                    <p className="bg-blue-300 p-1 rounded text-blue-900">
                      You saved ₹{pickupDiscount}
                    </p>
                  ) : (
                    <p className="bg-red-300 p-1 rounded text-red-600">
                      You saved: 0
                    </p>
                  )}
                </div>
              </div>

              {loading ? (
                <h1 className="px-5 py-3 text-center font-bold text-gray-600">
                  Loading...
                </h1>
              ) : (
                <div className="flex gap-5 items-center justify-between px-5 py-3">
                  {/* Delivery option */}
                  <div className="flex items-center gap-2 hover:cursor-pointer">
                    <input
                      type="radio"
                      name="deliveryOption"
                      checked={!pickUp}
                      onChange={() => handleDeliveryChange(false)}
                    />
                    <label className="text-sm">Delivery</label>
                  </div>

                  {/* Pickup option */}
                  <div className="flex items-center gap-2 ">
                    <input
                      type="radio"
                      name="deliveryOption"
                      checked={pickUp}
                      onChange={() => handleDeliveryChange(true)}
                    />
                    <label className="text-sm">Pick Up</label>
                  </div>
                </div>
              )}
            </div>

            {/* Products */}
            <CartProducts items={items} totalQuantity={totalQuantity} />
          </div>
        </div>

        {/* Bill */}
        <BillDetails />

        <CancellationPolicy />

        {/* Info Modal */}
        <PopUps
          open={openInfo}
          onClose={() => setOpenInfo(false)}
          title={type}
        />
      </div>
    </div>
  );
};

export default Cart;
