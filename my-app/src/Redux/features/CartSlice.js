import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // each item: {id, name, price, originalPrice, offer?, quantity, ...}
  totalQuantity: 0,
  totalPrice: 0,           // discounted total
  totalOriginalPrice: 0,   // ✅ new – sum of original prices × qty
  totalSavings: 0,
  deliveryCharge: 0,
  lastError: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload; // {id, name, price, offer(optional)}

      const originalPrice = newItem.price;

      // ✅ calculate discounted price if offer exists
      const discount =
        newItem.offer && newItem.offer > 0
          ? originalPrice * (newItem.offer / 100)
          : 0;

      const finalPrice = Number((originalPrice - discount).toFixed(1));

      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        if (existingItem.quantity >= 5) {
          state.lastError = `You’re allowed to add only 5 units of ${existingItem.name}`;
          return;
        }

        existingItem.quantity += 1;
        existingItem.totalItemPrice = Number(
          (finalPrice * existingItem.quantity).toFixed(1)
        );
      } else {
        state.items.push({
          ...newItem,
          originalPrice: originalPrice,
          price: finalPrice,
          quantity: 1,
          totalItemPrice: finalPrice,
        });
      }

      recalcTotals(state);
      state.lastError = null;
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (!existingItem) return;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity -= 1;
        existingItem.totalItemPrice = Number(
          (existingItem.price * existingItem.quantity).toFixed(1)
        );
      }

      recalcTotals(state);
      state.lastError = null;
    },

    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
      state.totalOriginalPrice = 0;  // ✅ reset
      state.totalSavings = 0;
      state.deliveryCharge = 0;
      state.lastError = null;
    },

    clearError: (state) => {
      state.lastError = null;
    },
  },
});

// helper to recompute totals/savings/delivery
function recalcTotals(state) {
  let quantity = 0;
  let discountedPrice = 0;
  let originalPriceTotal = 0;
  let savings = 0;

  state.items.forEach((item) => {
    quantity += item.quantity;
    discountedPrice += item.price * item.quantity;
    if (item.originalPrice) {
      originalPriceTotal += item.originalPrice * item.quantity;
      savings += (item.originalPrice - item.price) * item.quantity;
    }
  });

  state.totalQuantity = quantity;
  state.totalPrice = Number(discountedPrice.toFixed(1));
  state.totalOriginalPrice = Number(originalPriceTotal.toFixed(1)); // ✅
  state.totalSavings = Number(savings.toFixed(1));

  // delivery charge rule
  state.deliveryCharge = state.totalPrice >= 99 ? 0 : 25;
}

export const { addToCart, removeFromCart, clearCart, clearError } =
  cartSlice.actions;
export default cartSlice.reducer;
