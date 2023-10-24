import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchApi } from "http/http";

export const getProductThunk = createAsyncThunk(
    'products/get', async (_, thunkAPI) => {
        try {

            const result = await fetchApi.get('/products');
            return result.data;

        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
) 

export const getProductByNameThunk = createAsyncThunk(
    'products/search', async (name, thunkAPI) => {
        try {
            const result = await fetchApi.get(`/products/search/${name}`);
            return result.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
)

export const getNotRecommendedProductsThunk = createAsyncThunk(
    'products/notrecommended', async (typeblood, thunkAPI) => {
        try {

            const result = await fetchApi.get(`/products/intake/${typeblood}`);
            console.log('notrecom ', result.data);
            return result.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
)