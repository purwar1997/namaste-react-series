import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart(state, action) {
      const cartItem = state.find(({ menuItem }) => menuItem.id === action.payload.menuItem.id);
      const cartItemIndex = state.findIndex(
        ({ menuItem }) => menuItem.id === action.payload.menuItem.id
      );

      if (cartItem) {
        cartItem.quantity = cartItem.quantity + 1;
        state.splice(cartItemIndex, 1, cartItem);
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart(state, action) {
      const cartItem = state.find(({ menuItem }) => menuItem.id === action.payload);
      const cartItemIndex = state.findIndex(({ menuItem }) => menuItem.id === action.payload);

      if (cartItem.quantity > 1) {
        cartItem.quantity = cartItem.quantity - 1;
        state.splice(cartItemIndex, 1, cartItem);
      } else {
        state.splice(cartItemIndex, 1);
      }
    },

    clearCart(state) {
      state.length = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
