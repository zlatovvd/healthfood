import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchApi } from "http/http";

export const intakeAddThunk = createAsyncThunk(
    'intake/add', async (values, thunkAPI) => {
        try {

            const {data} = await fetchApi.post('/products/intake', values);
            return data;

        } catch (e) {
            thunkAPI.rejectWithValue(e.message);
        }
    }
)

export const intakeUpdateThunk = createAsyncThunk(
    'intake/update', async (values, thunkAPI) => {
        try {
            const {data} = await fetchApi.put(`/products/intake`, values);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

export const intakeGetThunk = createAsyncThunk(
    'intake/get', async (_, thunkAPI) => {
        try {
            const {data} = await fetchApi('/products/intake');
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)