import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchApi } from 'http/http';

export const diaryAddProductThunk = createAsyncThunk(
  'diary/add',
  async (values, thunkAPI) => {      
    try {
        const res = await fetchApi.post('/daily/', values);
        console.log(res);
        return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const diaryGetProductThunk = createAsyncThunk(
  'diary/get',
  async (date, thunkAPI) => {
    
    try {
      const res = await fetchApi.get(`/daily/${date}`);

      console.log('diary get', res.data);
      return res.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const diaryDelProductThunk = createAsyncThunk(
    'diary/del', async (productId, thunkAPI) => {
        try {
            const res = await fetchApi.delete(`/daily/${productId}`);
            return res.data;

        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        }
    }
)
