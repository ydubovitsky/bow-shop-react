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
    return response;
  }
)

export const saveCategory = createAsyncThunk(
  'category/saveCategory',
  async (category, { getState }) => {

    const { auth } = getState();

    const options = {
      method: 'POST',
      data: category,
      url: 'http://localhost:8080/api/v1/category/add',
      headers: {
        "Content-Type": "form/multipart",
        "Authorization": auth.authEntity.token
      }
    }

    const response = await dataFetch(options);
    return response;
  }
);

// -------------------------------- Slice --------------------------------

const initialState = {
  categoryEntities: [],
  status: 'idle',
  error: null
}

export const CategorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllCategories.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        const { payload } = action;
        state.categoryEntities = state.categoryEntities.concat(payload);
        state.status = 'succeeded'
      })
      .addCase(getAllCategories.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default CategorySlice.reducer

// -------------------------------- Selector --------------------------------

export const allCategoriesSelector = (state) => state.category.categoryEntities;
export const statusCategoriesSelector = state => state.category.status;
export const categoryByColumnSelector = state => state.category
  .categoryEntities.reduce((result, category) => {
    if (category.id % 3 === 0) {
      result.three.push(category);
      return result;
    }
    if (category.id % 2 === 0) {
      result.two.push(category)
      return result;
    }
    else {
      result.one.push(category);
      return result;
    }
  }, {
    one: [],
    two: [],
    three: []
  });
export const categoriesNameSelector = state => state.category
  .categoryEntities.map(category => category.name);
export const categoryInfoSelector = (state, name="") => state.category
  .categoryEntities
  .filter(category => category.name === name)
  .reduce((info, category) => (
    {
      ...info,
      name: category.name,
      description: category.description
    }), {});
export const firstCategoryElementNameSelector = (state) => {
  return state.category.categoryEntities[0]?.name;
}
