import {
  createSlice,
  current
} from '@reduxjs/toolkit';
// -------------------------------- Const --------------------------------
//TODO Внести в state?
const MAX_CART_PRODUCT_COUNT = 99;
const MIN_CART_PRODUCT_COUNT = 1;


// -------------------------------- AsyncThunk --------------------------------


// -------------------------------- Slice --------------------------------

const initialState = {
  cartEntities: [],
  status: 'idle',
  error: null
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    //TODO Переписать метод
    addProductToCart: {
      reducer(state, action) {
        const { product, count } = action.payload;
        const existedProductId = state.cartEntities.findIndex(entity => entity.product.id === product.id);
        if (existedProductId !== -1) {
          state.cartEntities[existedProductId].count
            = parseInt(state.cartEntities[existedProductId].count) + parseInt(count);
        } else {
          state.cartEntities.push(action.payload);
        }
      }
    },
    decreaseProductCount: {
      reducer(state, action) {
        const { product } = action.payload;
        const idx = state.cartEntities.findIndex(entity => entity.product.id === product.id);
        if (state.cartEntities[idx].count > MIN_CART_PRODUCT_COUNT) {
          --state.cartEntities[idx].count;
        }
        else {
          state.cartEntities.splice(idx, 1);
        }
      }
    },
    increaseProductCount: {
      reducer(state, action) {
        const { product } = action.payload;
        const idx = state.cartEntities.findIndex(entity => entity.product.id === product.id);
        if (state.cartEntities[idx].count < MAX_CART_PRODUCT_COUNT) {
          state.cartEntities[idx].count++;
        }
      }
    },
    removeProduct: {
      reducer(state, action) {
        const { product } = action.payload;
        const idx = state.cartEntities.findIndex(entity => entity.product.id === product.id);
        state.cartEntities.splice(idx, 1);
      }
    }
  }
});

export const {
  addProductToCart,
  increaseProductCount,
  decreaseProductCount,
  removeProduct } = cartSlice.actions;

export default cartSlice.reducer;

// -------------------------------- Selector --------------------------------

export const cartEntitiesSelector = state => state.cart.cartEntities;
export const cartTotalPriceSelector = state => state.cart.cartEntities
  .reduce((sum, { product, count }) => {
    console.log(product);
    return sum + parseInt(product.price, 10) * count
  }, 0);
export const cartProductEntitiesNumberSelector = state => state.cart.cartEntities.length;
export const cartProductTotalCountSelector = state => state.cart.cartEntities
  .reduce((sum, { count }) => sum + parseInt(count, 10), 0);
