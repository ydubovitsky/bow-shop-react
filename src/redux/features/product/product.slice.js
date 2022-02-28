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
    return response.data
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
    return response.data
  }
)


const initialState = {
  productEntities: [],
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
        state.categoryEntities = state.productEntities.concat(payload);
        state.status = 'succeeded'
      })
      .addCase(saveProduct.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export default productSlice.reducer

// -------------------------------- Selector --------------------------------

export const productStatusSelector = state => state.product.status;