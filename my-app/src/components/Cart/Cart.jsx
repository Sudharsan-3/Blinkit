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


// "use client";
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { GiStopwatch } from "react-icons/gi";
// import { IoMdClose } from "react-icons/io";
// import CartProducts from "./CartProducts";
// import BillDetails from "./BillDetails";

// const Cart = () => {
//   const dispatch = useDispatch();
//   const { items, totalQuantity, totalSavings } = useSelector(
//     (state) => state.cart
//   );

//   // Stub for close button logic (you’ll implement it)
//   const handleCloseCart = () => {
//     // Example: dispatch(toggleCart(false)) or navigate away
//     console.log("Close cart clicked");
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <div className="w-120 mx-auto">
//         {/* Header */}
//         <div className="flex items-center justify-between p-5 font-bold">
//           <h1 className="text-lg">My Cart</h1>
//           <button onClick={handleCloseCart}>
//             <IoMdClose size={22} />
//           </button>
//         </div>

//         {/* Savings banner */}
//         <div className="flex items-center px-3 pb-3">
//           <div className="flex items-center p-2 rounded-2xl font-semibold text-blue-500 bg-blue-100 w-full justify-between">
//             <span>Your total savings</span>
//             <span>₹{totalSavings}</span>
//           </div>
//         </div>

//         {/* Items block */}
//         <div className="p-2">
//           <div className="bg-white rounded-2xl shadow">
//             <div className="flex items-center p-5 gap-5">
//               <div className="bg-gray-100 p-3 rounded-2xl">
//                 <GiStopwatch size={32} />
//               </div>
//               <div>
//                 <p className="font-bold text-sm">Delivery in 21 minutes</p>
//                 <p className="text-xs text-gray-500">
//                   Shipment of {totalQuantity} item{totalQuantity > 1 && "s"}
//                 </p>
//               </div>
//             </div>
//             <CartProducts items={items} totalQuantity={totalQuantity} />
//           </div>
//         </div>

//         {/* Bill */}
//         <BillDetails />
//       </div>
//     </div>
//   );
// };

// export default Cart;


// "use client"
// import React from 'react'

// import { useDispatch, useSelector } from 'react-redux';

// import { GiStopwatch } from "react-icons/gi";
// import CartProducts from './CartProducts';
// import { IoMdClose } from "react-icons/io";
// import BillDetails from './BillDetails';



// const Cart = () => {
//   const dispatch = useDispatch();
//   // ✅ get items array from cart slice
//   const { items, totalQuantity, totalPrice ,totalSavings, deliveryCharge ,totalOriginalPrice} = useSelector((state) => state.cart);
//   console.log(items, totalPrice)
//   return (
//     <div className='bg-gray-100 '>
//       <div className='w-120'>
        
//         <div className='flex items-center justify-between p-5 font-bold'>
//           <h1>My Cart</h1>
//           <div>
//         <IoMdClose size={20} />
//           </div>
//         </div>
//         <div className='flex items-center p-3'>
//           <div className='flex items-center  p-2 rounded-2xl font-semibold text-blue-500 bg-blue-100 w-full justify-between '>
//           <h1>
//           Your total savings 
//           </h1>
//           <div>
//           ₹{totalSavings}
//           </div>
//         </div>
//         </div>
        
//         <div className='p-2'>
//            <div className='bg-white rounded-2xl'>
//           <div className='flex items-center p-5 gap-5 '>
//             <div className='bg-gray-100 p-2 rounded-2xl' >
//               <GiStopwatch size={35} />
//             </div>

//             <div>
//               <p className='font-bold text-sm'>Delivery in 21 minutes</p>
//               <p className='text-xs'>
//                 Shipment of {totalQuantity} item
//               </p>

//             </div>
//           </div>
//           <div>
//             <CartProducts items={items} totalQuantity={totalQuantity} />
//           </div>
//         </div>
//         </div>
//         <div>
//           <BillDetails  />

//         </div>
       

//       </div>


//     </div>
//   )
// }

// export default Cart
