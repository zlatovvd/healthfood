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
  const day = date.getDate();
  const today = `${year}-${month}-${day}`;

  return today;
};

const initDiaryState = {
  status: 'idle',
  data: [],
  diaryDate: getToday(),
};

const diarySlice = createSlice({
  name: 'diary',
  initialState: initDiaryState,
  reducers: {
    setDiaryDate: {
      reducer(state, {payload}) {
        console.log('diary payload', payload);
        state.diaryDate = payload;
      }
    }
  },
  extraReducers: builder => {
    builder
      .addCase(diaryAddProductThunk.pending, state => {
        state = 'loading';
      })
      .addCase(diaryAddProductThunk.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.data = [...state.data, payload];
        console.log('payload', payload);
      })
      .addCase(diaryAddProductThunk.rejected, state => {
        state.status = 'error';
      })
      .addCase(diaryGetProductThunk.pending, state => {
        state.status = 'loading';
      })
      .addCase(diaryGetProductThunk.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.data = payload;
      })
      .addCase(diaryGetProductThunk.rejected, state => {
        state.status = 'error';
      })
      .addCase(diaryDelProductThunk.pending, state => {
        state.status = 'loading';
      })
      .addCase(diaryDelProductThunk.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.data = state.data.filter(item => item._id !== payload._id);
      })
      .addCase(diaryDelProductThunk.rejected, state => {
        state.status = 'error';
      });
  },
  
});

export const diaryReducer = diarySlice.reducer;

export const { addDiary, removeDiary, setDiaryDate } = diarySlice.actions;
