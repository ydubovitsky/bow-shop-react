import {
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit';
import { dataFetch } from '../../../service/dataFetchService';

// -------------------------------- AsyncThunk --------------------------------

export const makeOrder = createAsyncThunk(
  'checkout/makeOrder',
  async (args, { getState }) => {
    const { cart } = getState();

    const order = cart.cartEntities.map(entity => {
      return {
        productId: entity.product.id,
        count: entity.count
      }
    });

    const options = {
      method: 'POST',
      data: { //! Обрати внимание, что передается
        order,
        contacts: args
      },
      url: 'http://localhost:8080/api/v1/order/add',
      headers: {
        "Content-Type": "application/json",
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

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(makeOrder.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(makeOrder.fulfilled, (state, action) => {
        const { payload } = action;
        state.productEntities = state.productEntities.concat(payload);
        state.status = 'succeeded'
      })
      .addCase(makeOrder.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export default checkoutSlice.reducer

// -------------------------------- Selector --------------------------------


// -------------------------------- Utils --------------------------------
const createOrderEntity = (args, cart) => {
  const order = cart.cartEntities.reduce((data, entity) => {
    const product = {
      productId: entity.product.id,
      count: entity.count
    }

    return {
      ...data,
      order: {
        ...data.order,
        [product.productId]: product
      }
    }
  }, { contacts: args });

  return order;
}