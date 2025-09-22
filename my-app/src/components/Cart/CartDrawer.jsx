// components/CartDrawer.jsx
"use client";
import React from "react";
import Cart from "./Cart"; // your existing cart content

const CartDrawer = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full bg-white z-50 transform transition-transform duration-300
          /* on small screens: full width */
          w-full
          /* on medium and up: only 24rem wide */
          md:w-96
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <Cart onClose={onClose} />
      </div>
    </>
  );
};

export default CartDrawer;
