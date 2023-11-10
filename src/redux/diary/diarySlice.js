import {
  diaryAddProductThunk,
  diaryDelProductThunk,
  diaryGetProductThunk,
} from './diaryThunk';

const { createSlice } = require('@reduxjs/toolkit');

const getToday = () => {
  const date = new Date();

  const year = date.getFullYear();

  const month =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const today = `${year}-${month}-${day}`;

  return today;
};

const initDiaryState = {
  status: 'idle',
  data: [],
  diaryDate: getToday(),
  isLoading: false,
};

const diarySlice = createSlice({
  name: 'diary',
  initialState: initDiaryState,
  reducers: {
    setDiaryDate: {
      reducer(state, {payload}) {
        state.diaryDate = payload;
      }
    }
  },
  extraReducers: builder => {
    builder
      .addCase(diaryAddProductThunk.pending, state => {
        state.status = 'loading';
        state.isLoading = true;
      })
      .addCase(diaryAddProductThunk.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.data = [...state.data, payload];
        state.isLoading = false;
      })
      .addCase(diaryAddProductThunk.rejected, state => {
        state.status = 'error';
        state.isLoading = false;
      })
      .addCase(diaryGetProductThunk.pending, state => {
        state.status = 'loading';
        state.isLoading = true;
      })
      .addCase(diaryGetProductThunk.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.data = payload;
        state.isLoading = false;
      })
      .addCase(diaryGetProductThunk.rejected, state => {
        state.status = 'error';
        state.isLoading = false;
      })
      .addCase(diaryDelProductThunk.pending, state => {
        state.status = 'loading';
        state.isLoading = true;
      })
      .addCase(diaryDelProductThunk.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.data = state.data.filter(item => item._id !== payload._id);
        state.isLoading = false;
      })
      .addCase(diaryDelProductThunk.rejected, state => {
        state.status = 'error';
        state.isLoading = false;
      });
  },
  
});

export const diaryReducer = diarySlice.reducer;

export const { addDiary, removeDiary, setDiaryDate } = diarySlice.actions;
