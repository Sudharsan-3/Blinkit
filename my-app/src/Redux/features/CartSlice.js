// Redux/features/CartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
  totalOriginalPrice: 0,
  totalSavings: 0,
  deliveryCharge: 0,
  smallCartCharge: 0,
  handlingCharge: 0,
  pickupDiscount: 0,
  grandTotal: 0,
  lastError: null,
  pickUp: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const originalPrice = newItem.price;
      const discount = newItem.offer && newItem.offer > 0
        ? originalPrice * (newItem.offer / 100)
        : 0;
      const finalPrice = Number((originalPrice - discount).toFixed(1));

      const existingItem = state.items.find(item => item.id === newItem.id);

      if (existingItem) {
        if (existingItem.quantity >= 5) {
          state.lastError = `You’re allowed to add only 5 units of ${existingItem.name}`;
          return;
        }
        existingItem.quantity += 1;
        existingItem.totalItemPrice = Number((finalPrice * existingItem.quantity).toFixed(1));
      } else {
        state.items.push({
          ...newItem,
          originalPrice,
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
      const existingItem = state.items.find(item => item.id === id);
      if (!existingItem) return;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id);
      } else {
        existingItem.quantity -= 1;
        existingItem.totalItemPrice = Number((existingItem.price * existingItem.quantity).toFixed(1));
      }

      recalcTotals(state);
      state.lastError = null;
    },

    clearCart: (state) => {
      Object.assign(state, initialState);
    },

    clearError: (state) => {
      state.lastError = null;
    },

    pickUpOption: (state, action) => {
      state.pickUp = action.payload; 
      recalcTotals(state); 
    },
  },
});

// helper function to recalc totals, charges, and savings
function recalcTotals(state) {
  let quantity = 0;
  let discountedPrice = 0;
  let originalPriceTotal = 0;
  let itemSavings = 0;

  state.items.forEach(item => {
    quantity += item.quantity;
    discountedPrice += item.price * item.quantity;
    if (item.originalPrice) {
      originalPriceTotal += item.originalPrice * item.quantity;
      itemSavings += (item.originalPrice - item.price) * item.quantity;
    }
  });

  state.totalQuantity = quantity;
  state.totalPrice = Number(discountedPrice.toFixed(1));
  state.totalOriginalPrice = Number(originalPriceTotal.toFixed(1));

  // Handling charge
  state.handlingCharge = quantity > 0 ? 2 : 0;

  // Delivery & small cart charge
  if (state.pickUp) {
    state.deliveryCharge = 0;
    state.smallCartCharge = 0;
  } else {
    state.deliveryCharge = state.totalPrice >= 99 ? 0 : 25;
    state.smallCartCharge = state.totalPrice < 99 ? 25 : 0;
  }

  // Pickup discount 5%
  state.pickupDiscount = state.pickUp
    ? Number((state.totalPrice * 0.05).toFixed(1))
    : 0;

  // Total savings = item-level savings + pickup discount
  state.totalSavings = Number((itemSavings + state.pickupDiscount).toFixed(1));

  // Grand total
  state.grandTotal = Number(
    (
      state.totalPrice +
      state.deliveryCharge +
      state.smallCartCharge +
      state.handlingCharge -
      state.pickupDiscount
    ).toFixed(1)
  );
}

export const {
  addToCart,
  removeFromCart,
  clearCart,
  clearError,
  pickUpOption,
} = cartSlice.actions;

export default cartSlice.reducer;
