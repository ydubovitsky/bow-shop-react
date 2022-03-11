import {
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit';
import { dataFetch } from '../../../service/dataFetchService';

// -------------------------------- AsyncThunk --------------------------------

export const login = createAsyncThunk(
  'auth/login',
  async (data) => {

    const options = {
      method: 'POST',
      url: 'http://localhost:8080/login',
      data: data,
      headers: {
        "Content-Type": "application/json"
      }
    }

    const response = await dataFetch(options);
    return response
  }
)

const initialState = {
  authEntity: {},
  status: 'idle',
  error: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(login.fulfilled, (state, action) => {
        const { payload } = action;
        state.authEntity = payload;
        state.status = 'succeeded'
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export default authSlice.reducer;

// -------------------------------- Selector --------------------------------

export const authSelector = state => state.auth;
