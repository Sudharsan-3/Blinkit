// context/CartDrawerContext.js
'use client'
import { createContext, useContext, useState } from 'react'
import CartDrawer from '@/components/Cart/CartDrawer'

const CartDrawerContext = createContext()

export const CartDrawerProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <CartDrawerContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
      {/* Render the drawer once, globally */}
      <CartDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </CartDrawerContext.Provider>
  )
}

export const useCartDrawer = () => useContext(CartDrawerContext)
