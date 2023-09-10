import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import userReducer from './userSlice';
import themeReducer from './themeSlice';
import pathReducer from './pathSlice';

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    theme: themeReducer,
    path: pathReducer,
  },
});

export default appStore;
