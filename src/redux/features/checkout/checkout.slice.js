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

export const getAllOrders = createAsyncThunk(
  'checkout/getAllOrders',
  async () => {

    const options = {
      method: 'GET',
      url: 'http://localhost:8080/api/v1/order/all',
      headers: {
        "Content-Type": "application/json",
      }
    }

    const response = await dataFetch(options);
    return response
  }
)

export const deleteOrderById = createAsyncThunk(
  'checkout/deleteOrderById',
  async (id, { getState }) => {

    const { auth } = getState();

    const options = {
      method: 'DELETE',
      url: `http://localhost:8080/api/v1/order/delete/${id}`,
      headers: {
        "Content-Type": "application/json",
        "Authorization": auth.authEntity.token
      }
    }

    const response = await dataFetch(options);
    return response
  }
)

const initialState = {
  orderEntities: {
    orders: [],
    status: 'idle',
    error: null
  },
  currentOrder: {
    order: [],
    status: 'idle',
    error: null
  }
}

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      //! makeOrder
      .addCase(makeOrder.pending, (state, action) => {
        state.currentOrder.status = 'loading'
      })
      .addCase(makeOrder.fulfilled, (state, action) => {
        const { payload } = action;
        state.currentOrder.order = payload;
        state.status = 'succeeded'
      })
      .addCase(makeOrder.rejected, (state, action) => {
        state.currentOrder.status = 'failed'
        state.currentOrder.error = action.error.message
      })
      //! getAllOrders
      .addCase(getAllOrders.pending, (state, action) => {
        state.orderEntities.status = 'loading'
      })
      .addCase(getAllOrders.fulfilled, (state, action) => {
        const { payload } = action;
        state.orderEntities.orders = payload;
        state.orderEntities.status = 'succeeded'
      })
      .addCase(getAllOrders.rejected, (state, action) => {
        state.orderEntities.status = 'failed'
        state.orderEntities.error = action.error.message
      })
      //! deleteOrderById
      .addCase(deleteOrderById.fulfilled, (state, action) => {
        const { payload: orderId } = action;
        const idx = state.orderEntities.orders.findIndex(order => order.id === orderId);
        state.orderEntities.orders.splice(idx, 1);
      })
  }
})

export default checkoutSlice.reducer

// -------------------------------- Selector --------------------------------

export const orderEntitiesSelector = state => state.checkout.orderEntities;

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