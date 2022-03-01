import {
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit';
import { dataFetch } from '../../../service/dataFetchService';

// -------------------------------- AsyncThunk --------------------------------

export const getAllProducts = createAsyncThunk(
  'product/getAllProducts',
  async () => {

    const options = {
      method: 'GET',
      url: 'http://localhost:8080/api/v1/product/all',
      headers: {
        "Content-Type": "application/json"
      }
    }

    const response = await dataFetch(options);
    return response
  }
)

export const saveProduct = createAsyncThunk(
  'product/saveProduct',
  async (product) => {

    const options = {
      method: 'POST',
      data: product,
      url: 'http://localhost:8080/api/v1/product/add',
      headers: {
        "Content-Type": "form/multipart",
      }
    }

    const response = await dataFetch(options);
    return response
  }
)


const initialState = {
  productEntities: {
    products: [],
    status: 'idle',
    error: null
  },
  status: 'idle',
  error: null
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(saveProduct.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(saveProduct.fulfilled, (state, action) => {
        const { payload } = action;
        state.productEntities = state.productEntities.concat(payload);
        state.status = 'succeeded'
      })
      .addCase(saveProduct.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(getAllProducts.pending, (state, action) => {
        state.productEntities.status = 'loading'
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        const { payload } = action;
        state.productEntities.products = state.productEntities.products.concat(payload);
        state.productEntities.status = 'succeeded'
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.productEntities.status = 'failed'
        state.productEntities.error = action.error.message
      })
  }
})

export default productSlice.reducer

// -------------------------------- Selector --------------------------------

export const productEntitiesStatusSelector = state => state.product.productEntities.status;
export const productByCategorySelector = (state, categoryName) => state.product
  .productEntities.products.filter(product => {
    return product.category.name === categoryName
  });