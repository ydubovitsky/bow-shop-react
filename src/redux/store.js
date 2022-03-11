import { configureStore } from '@reduxjs/toolkit'
import productReducer from './features/product/product.slice';
import categoryReducer from './features/category/category.slice';
import cartReducer from './features/cart/cart.slice';
import checkoutReducer from './features/checkout/checkout.slice';
import authReducer from './features/auth/auth.slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    category: categoryReducer,
    cart: cartReducer,
    checkout: checkoutReducer
  },
});