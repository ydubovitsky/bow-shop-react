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
  async (product, { getState }) => {

    const { auth } = getState();

    const options = {
      method: 'POST',
      data: product,
      url: 'http://localhost:8080/api/v1/product/add',
      headers: {
        "Content-Type": "form/multipart",
        "Authorization": auth.authEntity.token
      }
    }

    const response = await dataFetch(options);
    return response
  }
)

export const deleteProduct = createAsyncThunk(
  'product/deleteProduct',
  async (id, { getState }) => {

    const { auth } = getState();

    const options = {
      method: 'DELETE',
      url: `http://localhost:8080/api/v1/product/delete/${id}`,
      headers: {
        "Content-Type": "application/json",
        "Authorization": auth.authEntity.token
      }
    }

    const response = await dataFetch(options);
    return response
  }
)

//TODO Переделать state
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
      .addCase(deleteProduct.fulfilled, (state, action) => {
        const { payload } = action;
        console.log(payload);
      })
  }
})

export default productSlice.reducer

// -------------------------------- Selector --------------------------------

export const productEntitiesStatusSelector = state => state.product.productEntities.status;
export const productEntitiesSelector = state => state.product.productEntities;
export const productByCategorySelector = (state, categoryName = "") => state.product
  .productEntities.products.filter(product => {
    return product.category?.name === categoryName
  });
export const productByIdSelector = (state, id) => state.product
  .productEntities.products.filter(product => product.id === id)[0];
export const recommendationProductsSelector = state => {
  return state.product.productEntities.products.filter(product => product.id < 4);
}
export const findProductsByKeywordSelector = (state, keyword) => {
  return state.product.productEntities
    .products.filter(product => product.name.includes(keyword))
}
export const productsByCreateDateSelector = (state, count) => {
  const copy = [...state.product.productEntities.products]; //TODO Вынести в state?

  return copy.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, count);
}
export const productsFilteredByCategoryAndPriceSelector = (state, price, categoryName = "") => (
  state.product
    .productEntities.products
    .filter(product => {
      return product.category?.name === categoryName
    })
    .filter(product => parseInt(product.price) < price)
);