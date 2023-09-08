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
        state.push(action.payload);
      }
    },

    removeFromCart(state, action) {
      const cartItem = state.find(({ menuItem }) => menuItem.id === action.payload.menuItem.id);
      const cartItemIndex = state.findIndex(
        ({ menuItem }) => menuItem.id === action.payload.menuItem.id
      );

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
    // increaseQuantity(state, action) {
    //   return state.map(menuItem =>
    //     menuItem.info.id === action.payload.itemId ? { ...menuItem, quantity: menuItem.quantity + 1 } : menuItem
    //   );
    // },
    // decreaseQuantity(state, action) {
    //   const cartItem = state.find(menuItem => menuItem.info.id === action.payload.itemId);
    //   const cartItemIndex = state.findIndex(menuItem => menuItem.info.id === action.payload.itemId);

    //   if (cartItem.quantity > 1) {
    //     cartItem.quantity = cartItem.quantity - 1;
    //     state.splice(cartItemIndex, 1, cartItem);
    //   } else {
    //     state.splice(cartItemIndex, 1);
    //   }
    // },
  },
});

export const { addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
