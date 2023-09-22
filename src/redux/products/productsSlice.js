const { createSlice } = require('@reduxjs/toolkit');
const { getProductThunk } = require('./productsThunk');

const productsInitialState = {
  data: null,
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
      });
  },
});

export const { addProductAction, setFilter } = productsSlice.actions;

export const productsReduser = productsSlice.reducer;
