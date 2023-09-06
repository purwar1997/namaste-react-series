import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],

  reducers: {
    addToCart(state, action) {
      return [...state, action.payload.menuItem];
    },
    removeFromCart(state, action) {
      return state.filter(item => item.info.id !== action.payload.itemId);
    },
    clearCart() {
      return [];
    },
    increaseQuantity(state, action) {
      return state.map(item =>
        item.info.id === action.payload.itemId ? { ...item, quantity: item.quantity + 1 } : item
      );
    },
    decreaseQuantity(state, action) {
      const cartItem = state.find(item => item.info.id === action.payload.itemId);
      const cartItemIndex = state.findIndex(item => item.info.id === action.payload.itemId);

      if (cartItem.quantity > 1) {
        cartItem.quantity = cartItem.quantity - 1;
        state.splice(cartItemIndex, 1, cartItem);
      } else {
        state.splice(cartItemIndex, 1);
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
