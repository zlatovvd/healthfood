import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchApi } from "http/http";

export const getProductThunk = createAsyncThunk(
    'products/get', async (_, thunkAPI) => {
        try {

            const result = await fetchApi.get('/products');
            console.dir(result.data);
            return result.data;

        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
) 