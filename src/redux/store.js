import { configureStore } from '@reduxjs/toolkit'
import productReducer from './features/product/product.slice';
import categoryReducer from './features/category/category.slice';
import cartReducer from './features/cart/cart.slice';
import checkoutReducer from './features/checkout/checkout.slice';

export const store = configureStore({
  reducer: {
    product: productReducer,
    category: categoryReducer,
    cart: cartReducer,
    checkout: checkoutReducer
  },
});