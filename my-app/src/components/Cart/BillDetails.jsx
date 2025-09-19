import React from "react";
import { CgNotes } from "react-icons/cg";
import { GiScooter } from "react-icons/gi";
import { BsInfoLg, BsHandbagFill } from "react-icons/bs";
import { useSelector } from "react-redux";

const BillDetails = () => {
    const {
        totalPrice,
        totalSavings,
        deliveryCharge,
        totalOriginalPrice,
    } = useSelector((state) => state.cart);

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
                            <BsInfoLg className="text-gray-400" size={12} />
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
                            <BsInfoLg className="text-gray-400" size={12} />
                        </div>
                        <span>₹2</span>
                    </div>

                    {/* Grand total */}
                    <div className="flex items-center justify-between pt-2 ">
                        <span className="font-medium">Grand total</span>
                        <span className="font-bold text-base">
                            ₹
                            {(
                                totalPrice > 99
                                    ? totalPrice + 2           // above 99 → only handling charge
                                    : totalPrice + 2 + 25      // below 99 → handling + delivery charge
                            ).toFixed(1)}
                        </span>
                    </div>


                    {/* Savings box */}
                    {
                        totalSavings>0?(<div className="flex items-center">
                        <div className="flex items-center p-3 rounded-2xl font-semibold text-blue-500 bg-blue-100 w-full justify-between">
                            <span>Your total savings</span>
                            <span>₹{totalSavings}</span>
                        </div>
                    </div>):("")
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default BillDetails;



// import React from 'react'
// import { CgNotes } from "react-icons/cg";
// import { GiScooter } from "react-icons/gi";
// import { BsInfoLg } from "react-icons/bs";
// import { BsHandbagFill } from "react-icons/bs";
// import { useDispatch, useSelector } from 'react-redux';




// const BillDetails = () => {
//     const { items, totalQuantity, totalPrice, totalSavings, deliveryCharge, totalOriginalPrice } = useSelector((state) => state.cart);

//     return (
//         <div className='p-2'>
//             <div className='bg-white p-3 rounded-2xl'>
//                 <h1>Bill details</h1>
//                 <div className='text-sm flex flex-col gap-2'>
//                     <div className='flex flex-col gap-2'>
//                         <div className=' flex items-center justify-between '>
//                             <div className='flex items-center  gap-1'>
//                                 <div><CgNotes /></div>
//                                 <div>items total</div>
//                                 <div className='text-blue-500 bg-blue-100 px-0.5'>saved ₹{totalSavings}</div>
//                             </div>
//                             {
//                                 totalPrice ? <div className='flex gap-1'><div className='line-through'>₹{totalOriginalPrice}</div> <div>₹{totalPrice}</div>  </div> : <div>{totalOriginalPrice}</div>
//                             }

//                         </div>
//                         <div className=' flex items-center justify-between'>
//                             <div className='flex items-center  gap-1'>
//                                 <div><GiScooter />   </div>
//                                 <div>Delivery charge  </div>
//                                 <div><BsInfoLg />     </div>
//                             </div>
//                             {deliveryCharge ? <div>₹{deliveryCharge} </div> : <div className='flex gap-1'><div className='line-through'>25</div><div> Free</div> </div>}

//                         </div>
//                         <div className=' flex items-center justify-between'>
//                             <div className='flex items-center  gap-1'>
//                                 <div><BsHandbagFill /> </div>
//                                 <div>Handling charge</div>
//                                 <div><BsInfoLg />
//                                 </div>
//                             </div>
//                             <div>₹{2} </div></div>

//                     </div>
//                     <div className='flex items-center justify-between'>
//                         <div>Grand total</div>
//                         <div>₹{totalPrice + 2}</div>
//                     </div>
//                     <div className='flex items-center '>
//                         <div className='flex items-center  p-4 rounded-2xl font-semibold text-blue-500 bg-blue-100 w-full justify-between '>
//                             <h1>
//                                 Your total savings
//                             </h1>
//                             <div>
//                                 ₹{totalSavings}
//                             </div>
//                         </div>
//                     </div>


//                 </div>
//             </div>

//         </div>
//     )
// }

// export default BillDetails
