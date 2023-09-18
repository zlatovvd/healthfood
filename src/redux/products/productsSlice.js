const { createSlice } = require('@reduxjs/toolkit');
const { getProductThunk } = require('./productsThunk');

const productsInitialState = {
  data: null,
  isLoading: false,
};

const productsSlice = createSlice({
  name: 'products',
  initialState: productsInitialState,
  extraReducers: builder => {
    builder
      .addCase(getProductThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(getProductThunk.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.isLoading = false;
      })
      .addCase(getProductThunk.rejected, state => {
        state.isLoading = false;
      });
  },
});

export const productsReduser = productsSlice.reducer;
