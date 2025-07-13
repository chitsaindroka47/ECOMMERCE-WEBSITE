import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import categoryReducer from './categorySlice';

export default configureStore({
  reducer: {
    cart: cartReducer,
    category: categoryReducer,
  },
});
