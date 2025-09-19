import React from "react";
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "@/Redux/features/CartSlice";

const CartProducts = ({ items = [] }) => {
  const dispatch = useDispatch();

  return (
    <div >
      {items.map((item) => {
        const quantity = item.quantity;
        return (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 text-sm"
          >
            {/* image */}
            <div className="flex-shrink-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-contain rounded shadow-sm"
              />
            </div>

            {/* info + controls */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full gap-3">
              <div className="flex flex-col">
                <p className="font-medium">{item.name}</p>
                <div className="flex items-center gap-2">
                  {item.originalPrice && item.originalPrice > item.price ? (
                    <>
                      <span className="text-sm font-semibold">
                        ₹{item.price}
                      </span>
                      <span className="text-xs text-gray-400 line-through">
                        ₹{item.originalPrice}
                      </span>
                    </>
                  ) : (
                    <span className="text-sm font-semibold">₹{item.price}</span>
                  )}
                </div>
              </div>

              {quantity > 0 && (
                <div className="flex items-center gap-3 w-fit  border-green-600 text-white text-sm px-1 py-1 rounded bg-green-600 hover:bg-green-700 transition-colors">
                  <button onClick={() => dispatch(removeFromCart(item.id))}>
                    <FiMinus />
                  </button>
                  <p>{quantity}</p>
                  <button onClick={() => dispatch(addToCart(item))}>
                    <IoMdAdd />
                  </button>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartProducts;

// import React from 'react'
// import { IoMdAdd } from "react-icons/io";
// import { FiMinus } from "react-icons/fi";
// import { useDispatch, useSelector } from 'react-redux';
// import { addToCart, removeFromCart } from "@/Redux/features/CartSlice"

// const CartProducts = ({ items = [], totalQuantity }) => {
//     const dispatch = useDispatch()

//     console.log(items, "from CartProducts")

//     return (
//         <div>
//             {items.map((item) => {
//                 const hasOffer = item.offer && item.offer > 0;
//                 const discounted = hasOffer
//                     ? Math.round(item.price - (item.price * item.offer) / 100)
//                     : item.price;

//                 // ✅ find this product in the cart
//                 const cartItem = items.find((c) => c.id === item.id);

//                 // ✅ get its quantity (or 0 if not found)
//                 const quantity = cartItem?.quantity || 0;
//                 return (
//                     <div key={item.id} className='flex items-center justify-center gap-5 p-4 text-sm'>
//                         <div className='flex items-center w-39 h-39 p-1 '>
//                             <img src={item.image} alt={item.name}  className='h-fit w-auto shadow-sm border border-gray-100' />
//                         </div>
//                         <div className='flex items-end justify-between gap-5 w-full'>
//                             <div>
//                                 <p>{item.name}</p>
//                                 <div className='flex items-center gap-4' >
//                                     {hasOffer ? (
//                                         <>
//                                             <div className="text-sm font-semibold">₹{discounted}</div>
//                                             <div className="text-xs text-gray-400 line-through">
//                                                 ₹{item.price}
//                                             </div>
//                                         </>
//                                     ) : (
//                                         <div className="text-sm font-semibold">₹{item.price}</div>
//                                     )}
//                                 </div>
//                             </div>
//                             <div>
//                                 {quantity === 0 ? (
//                                     ""
//                                 ) : (
//                                     <div className="flex items-center justify-center gap-3  hover:cursor-pointer w-fit border border-green-600 text-white text-sm px-1 py-1.5 rounded bg-green-600  transition-colors">
//                                         <div onClick={() => dispatch(removeFromCart(item.id))}>
//                                             <FiMinus />
//                                         </div>
//                                         <p>{quantity}</p>
//                                         <div onClick={() => dispatch(addToCart(item))}>
//                                             <IoMdAdd />
//                                         </div>
//                                     </div>
//                                 )}



//                             </div>

//                         </div>
//                     </div>
//                 )

//             })}


//         </div>
//     )
// }

// export default CartProducts
