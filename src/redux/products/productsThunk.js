import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchApi } from "http/http";

export const getProductThunk = createAsyncThunk(
    'products/get', async (_, thunkAPI) => {
        try {
            const {data} = await fetchApi.get('/products');
            return data;

        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
) 

export const getProductByNameThunk = createAsyncThunk(
    'products/search', async (name, thunkAPI) => {
        try {
            const {data} = await fetchApi.get(`/products/search/${name}`);
            console.log('think product', data);
            return data;
        } catch (e) {
            console.log('think product reject', e);
            return thunkAPI.rejectWithValue(e);
        }
    }
)

export const getNotRecommendedProductsThunk = createAsyncThunk(
    'products/notrecommended', async (typeblood, thunkAPI) => {
        try {
            const {data} = await fetchApi.get(`/products/intake/${typeblood}`);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
)