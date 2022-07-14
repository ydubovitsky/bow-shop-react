import { configureStore } from '@reduxjs/toolkit';
import productReducer from './features/product/product.slice';
import categoryReducer from './features/category/category.slice';
import cartReducer from './features/cart/cart.slice';
import checkoutReducer from './features/checkout/checkout.slice';
import authReducer from './features/auth/auth.slice';
import popupReducer from './features/popup/popup.slice';
import subscribeReducer from './features/subscribe/subscribe.slice';
import logger from 'redux-logger';
import PopupMiddleware from './middleware/popup.middleware';
import { loadState, saveState } from './localStorage';

const persistedState = loadState('auth');

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    category: categoryReducer,
    cart: cartReducer,
    checkout: checkoutReducer,
    popup: popupReducer,
    subscribe: subscribeReducer
  },
  preloadedState: {
    auth: persistedState
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger, PopupMiddleware),
});

store.subscribe(() => {
  saveState('auth', store.getState().auth);
});