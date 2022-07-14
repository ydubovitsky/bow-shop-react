import {
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit';
import { dataFetch } from '../../../service/dataFetchService';

// -------------------------------- AsyncThunk --------------------------------

export const updateContacts = createAsyncThunk(
  'user/updateContacts',
  async (data) => {

    const options = {
      method: 'POST',
      //FIXME Update link to contacts
      url: 'http://localhost:8080/api/v1/user/updateContacts',
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
  userEntity: {
    contacts: {}
  },
  status: 'idle',
  error: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(updateContacts.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(updateContacts.fulfilled, (state, action) => {
        const { payload } = action;
        state.userEntity.contacts = payload;
        state.status = 'succeeded'
      })
      .addCase(updateContacts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export default userSlice.reducer;

// -------------------------------- Selector --------------------------------

export const authSelector = state => state.auth;
