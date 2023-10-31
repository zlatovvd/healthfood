import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchApi } from 'http/http';

export const diaryAddProductThunk = createAsyncThunk(
  'diary/add',
  async (values, thunkAPI) => {      
    try {
        const {data} = await fetchApi.post('/daily/', values);
        return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const diaryGetProductThunk = createAsyncThunk(
  'diary/get',
  async (date, thunkAPI) => {
    
    try {
      const {data} = await fetchApi.get(`/daily/${date}`);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const diaryDelProductThunk = createAsyncThunk(
    'diary/del', async (productId, thunkAPI) => {
        try {
            const {data} = await fetchApi.delete(`/daily/${productId}`);
            return data;

        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        }
    }
)
