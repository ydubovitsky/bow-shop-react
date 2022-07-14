import {
  createSlice,
} from '@reduxjs/toolkit';

// -------------------------------- Slice --------------------------------

const initialState = {
  popUpEntity: {
    message: null,
    isShow: false,
    style: null
  },
  status: 'idle',
  error: null
}

export const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    showPopup: {
      reducer(state, action) {
        state.popUpEntity = action.payload;
      }
    }
  }
});

export const { showPopup } = popupSlice.actions;

export default popupSlice.reducer;

// -------------------------------- Selector --------------------------------

export const popUpEntitySelector = state => state.popup.popUpEntity;
