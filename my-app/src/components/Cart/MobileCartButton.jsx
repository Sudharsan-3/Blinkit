// components/MobileCartButton.js
"use client";

import { useSelector } from "react-redux";
import { useCartDrawer } from "@/context/CartDrawerContext";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { MdArrowRight } from "react-icons/md";

export default function MobileCartButton() {
  const { setIsOpen } = useCartDrawer();
  const cartItems = useSelector((s) => s.cart.totalQuantity);
  const cartPrice = useSelector((s) => s.cart.totalPrice);

  // hide if no items
  if (!cartItems || cartItems === 0) return null;

  return (
    <button
      onClick={() => setIsOpen(true)}
      className="
        fixed bottom-4 left-1/2 -translate-x-1/2 
        px-4 py-3 
        bg-green-500 text-white 
        rounded-2xl shadow-lg 
        flex items-center justify-between gap-4 
        w-[90%] max-w-md
        lg:hidden
      "
    >
      {/* Cart icon + info */}
      <div className="flex items-center gap-3">
        <HiOutlineShoppingCart size={36} />
        <div className="text-left">
          <div className="text-sm">{cartItems} items</div>
          <div className="text-base font-semibold">₹{cartPrice}</div>
        </div>
      </div>

      {/* View cart text + arrow */}
      <div className="flex items-center gap-1 font-medium">
        <span>View Cart</span>
        <MdArrowRight size={20} />
      </div>
    </button>
  );
}
