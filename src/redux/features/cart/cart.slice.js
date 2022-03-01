import {
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit';
import { dataFetch } from '../../../service/dataFetchService';

// -------------------------------- AsyncThunk --------------------------------

// export const getAllProducts = createAsyncThunk(
//   'product/getAllProducts',
//   async () => {

//     const options = {
//       method: 'GET',
//       url: 'http://localhost:8080/api/v1/product/all',
//       headers: {
//         "Content-Type": "application/json"
//       }
//     }

//     const response = await dataFetch(options);
//     return response
//   }
// )

const initialState = {
  cartEntities: [],
  status: 'idle',
  error: null
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: {
      reducer(state, action) {
        state.cartEntities.push(action.payload)
      }
    }
  },
  // extraReducers(builder) {
  //   builder
  //     .addCase(saveProduct.pending, (state, action) => {
  //       state.status = 'loading'
  //     })
  //     .addCase(saveProduct.fulfilled, (state, action) => {
  //       const { payload } = action;
  //       state.productEntities = state.productEntities.concat(payload);
  //       state.status = 'succeeded'
  //     })
  //     .addCase(saveProduct.rejected, (state, action) => {
  //       state.status = 'failed'
  //       state.error = action.error.message
  //     })
  //     .addCase(getAllProducts.pending, (state, action) => {
  //       state.productEntities.status = 'loading'
  //     })
  //     .addCase(getAllProducts.fulfilled, (state, action) => {
  //       const { payload } = action;
  //       state.productEntities.products = state.productEntities.products.concat(payload);
  //       state.productEntities.status = 'succeeded'
  //     })
  //     .addCase(getAllProducts.rejected, (state, action) => {
  //       state.productEntities.status = 'failed'
  //       state.productEntities.error = action.error.message
  //     })
  // }
})

export const { addProductToCart } = cartSlice.actions;

export default cartSlice.reducer;

// -------------------------------- Selector --------------------------------

export const cartEntitiesSelector = state => state.cart.cartEntities;
export const cartTotalPriceSelector = state => state.cart.cartEntities
  .reduce((sum, { product, count }) => {
    console.log(product);
    return sum + parseInt(product.price, 10) * count
  }, 0);
