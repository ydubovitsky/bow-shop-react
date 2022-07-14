import {
  createSlice
} from '@reduxjs/toolkit';

// -------------------------------- Slice --------------------------------

const initialState = {
  subscribeEntity: {
  },
  status: 'idle',
  error: null
}

//TODO Закончить функционал подписки!
export const subscribeSlice = createSlice({
  name: 'subscribe',
  initialState,
  reducers: {
    subscribe: {
      reducer(state, action) {

      }
    }
  }
});

export const { subscribe } = subscribeSlice.actions;

export default subscribeSlice.reducer;

// -------------------------------- Selector --------------------------------

