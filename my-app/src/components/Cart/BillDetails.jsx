"use client"
import React, { useState } from "react";
import { CgNotes } from "react-icons/cg";
import { GiScooter } from "react-icons/gi";
import { BsInfoLg, BsHandbagFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { BsCart3 } from "react-icons/bs";
import PopUps from "../PopUp/PopUps";
const BillDetails = () => {
    const {
        totalPrice,
        totalSavings,
        deliveryCharge,
        totalOriginalPrice,
        pickUp,
        grandTotal,
        smallCartCharge,
        handlingCharge,
    } = useSelector((state) => state.cart);
    const [openInfo, setOpenInfo] = useState(false);
    const [type, setType] = useState("")

    return (
        <div className="p-2">
            <div className="bg-white p-4 rounded-2xl shadow">
                <h2 className="text-lg font-semibold mb-3">Bill Details</h2>

                <div className="space-y-3 text-sm">
                    {/* Items total */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <CgNotes />
                            <span>Items total</span>
                            {totalSavings > 0 && (
                                <span className="text-xs text-blue-500 bg-blue-100 px-1 rounded">
                                    saved ₹{totalSavings}
                                </span>
                            )}
                        </div>
                        {totalPrice ? (
                            <div className="flex gap-2">
                                {totalOriginalPrice > totalPrice && (
                                    <span className="line-through text-gray-400">
                                        ₹{totalOriginalPrice}
                                    </span>
                                )}
                                <span className="font-semibold">₹{totalPrice}</span>
                            </div>
                        ) : (
                            <span>₹{totalOriginalPrice}</span>
                        )}
                    </div>

                    {/* Delivery */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <GiScooter />
                            <span>Delivery charge</span>
                            <div
                                onClick={() => (setOpenInfo(true), setType("deliveryCharge"))}
                                className="border border-gray-100 shadow-sm rounded-full hover:cursor-pointer p-1"
                            >
                                <BsInfoLg className="text-gray-400" size={12} />
                            </div>

                        </div>
                        {deliveryCharge ? (
                            <span>₹{deliveryCharge}</span>
                        ) : (
                            <div className="flex gap-1">
                                <span className="line-through text-gray-400">₹25</span>
                                <span className="text-green-600 font-semibold">Free</span>
                            </div>
                        )}
                    </div>

                    {/* Handling */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <BsHandbagFill />
                            <span>Handling charge</span>
                            <div
                                onClick={() => (setOpenInfo(true), setType("handlingCharge"))}
                                className="border border-gray-100 shadow-sm rounded-full hover:cursor-pointer p-1"
                            >
                                <BsInfoLg className="text-gray-400" size={12} />
                            </div>

                        </div>
                        <span>₹{handlingCharge}</span>
                    </div>
                    {smallCartCharge ? (

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <BsCart3 />

                                <span>Small cart charge
                                </span>
                                <div
                                    onClick={() => (setOpenInfo(true), setType("smallCartCharge"))}
                                    className="border border-gray-100 shadow-sm rounded-full hover:cursor-pointer p-1"
                                >
                                    <BsInfoLg className="text-gray-400" size={12} />
                                </div>

                            </div>
                            <span>₹{smallCartCharge}</span>
                        </div>
                    ) : ""}


                    {/* Grand total */}
                    <div className="flex items-center justify-between pt-2 ">
                        <span className="font-medium">Grand total</span>
                        <span className="font-bold text-base">
                            ₹{grandTotal}
                        </span>
                    </div>


                    {/* Savings box */}
                    {
                        totalSavings > 0 ? (<div className="flex items-center">
                            <div className="flex items-center p-3 rounded-2xl font-semibold text-blue-500 bg-blue-100 w-full justify-between">
                                <span>Your total savings</span>
                                <span>₹{totalSavings}</span>
                            </div>
                        </div>) : ("")
                    }

                </div>
            </div>

            {/* Info Modal */}
            <PopUps
                open={openInfo}
                onClose={() => setOpenInfo(false)}
                title={type}
            />
                
        </div>
    );
};

export default BillDetails;



