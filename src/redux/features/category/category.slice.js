import {
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit';
import { dataFetch } from '../../../service/dataFetchService';

// -------------------------------- AsyncThunk --------------------------------

export const getAllCategories = createAsyncThunk(
  'category/getAllCategories',
  async () => {

    const options = {
      method: 'GET',
      url: 'http://localhost:8080/api/v1/category/all',
      headers: {
        "Content-Type": "application/json"
      }
    }

    const response = await dataFetch(options);
    return response.data
  }
)

export const saveCategory = createAsyncThunk(
  'category/saveCategory',
  async (category) => {
    
    const options = {
      method: 'POST',
      data: category,
      url: 'http://localhost:8080/api/v1/category/add',
      headers: {
        "Content-Type": "form/multipart",
      }
    }

    const response = await dataFetch(options);
    return response.data
  }
)


const initialState = {
  value: 0,
}

export const CategorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default CategorySlice.reducer