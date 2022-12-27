import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CLIENT_API } from '../constants/constant';

export const getCategories = createAsyncThunk('categories', async () => {
  const data = await fetch(`${CLIENT_API}/category`);
  return data.json();
});

const categorySlice = createSlice({
  name: 'category',
  initialState: { data: {}, currentCategory: {} },

  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
  reducers: {
    setCurrentCategory: (state, { payload }) => {
      state.currentCategory = payload;
    },
  },

});

export const { setCurrentCategory } = categorySlice.actions;

export default categorySlice.reducer;
