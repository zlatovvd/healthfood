import { createAsyncThunk } from "@reduxjs/toolkit";

const { fetchApi } = require("http/http")

const setAuthHeader = token => {
    fetchApi.defaults.headers.common.Authorization = `Bearer ${token}`;
}

const clearAuthHeader = () => {
    fetchApi.defaults.headers.common.Authorization = "";
}

export const authRegisterThunk = createAsyncThunk(
    'auth/register', async (values, thunkAPI) => {

        try {
            const {data} = await fetchApi.post('/users/register', values);
            setAuthHeader(data.token);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }

    }
)

export const authLoginThunk = createAsyncThunk(
    'auth/login', async (values, thunkAPI) => {
        try {

            const {data} = await fetchApi.post('/users/login', values);
            setAuthHeader(data.token);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

export const authLogoutThunk = createAsyncThunk(
    'auth/logout', async (_, thunkAPI) => {
        try {
            await fetchApi.post('/users/logout');
            clearAuthHeader();
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
        
    }
)

export const authRefreshThunk = createAsyncThunk(
    'auth/refresh', async (_, thunkAPI) => {
        try {
            const {token} = thunkAPI.getState().auth;
            if (!token) return thunkAPI.rejectWithValue('Token is not valid');
            setAuthHeader(token);
            const {data} = await fetchApi.get('/users/current');
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)