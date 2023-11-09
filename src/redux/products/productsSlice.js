const { createSlice } = require('@reduxjs/toolkit');
const { getProductThunk, getNotRecommendedProductsThunk, getProductByNameThunk } = require('./productsThunk');

const productsInitialState = {
  data: null,
  notRecommended: [],
  isLoading: false,
  filter: ''
};

const productsSlice = createSlice({
  name: 'products',
  initialState: productsInitialState,
  reducers: {
    addProductAction: {
      reducer(state, { payload }) {
        state = [...state, payload];
      },
    },
    setFilter: {
      reducer(state, { payload }) {
        state.filter = payload;
      },
    },
  },
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
      })
      .addCase(getProductByNameThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(getProductByNameThunk.fulfilled, (state, {payload}) => {
        state.data = payload;
        state.isLoading = false;
      })
      .addCase(getProductByNameThunk.rejected, (state, {payload}) => {
        console.log('pauload pr', payload);
        state.isLoading = false;
      })
      .addCase(getNotRecommendedProductsThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(getNotRecommendedProductsThunk.fulfilled, (state, {payload} ) => {
        state.isLoading = false;
        state.notRecommended = payload;
      })
      .addCase(getNotRecommendedProductsThunk.rejected, state => {
        state.isLoading = false;
      })
  },
});

export const { addProductAction, setFilter } = productsSlice.actions;

export const productsReduser = productsSlice.reducer;
