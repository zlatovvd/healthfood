import { authLoginThunk, authLogoutThunk, authRefreshThunk, authRegisterThunk } from './authThunk';
import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authInitialState = {
  user: {id:null, name:null, email:null},
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder => {
    builder
      .addCase(authRegisterThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(authRegisterThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(authRegisterThunk.rejected, (state, {payload}) => {
        state.isLoading = false;
        console.log('pay register', payload);
      })
      .addCase(authLoginThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(authLoginThunk.fulfilled, (state, {payload}) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(authLoginThunk.rejected, (state, {payload}) => {
        console.log('error payload', payload);
        state.error = true;
        state.isLoading = false;
      })
      .addCase(authLogoutThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(authLogoutThunk.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = '';
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(authLogoutThunk.rejected, state => {
        state.isLoading = false;
      })
      .addCase(authRefreshThunk.pending, state => {
        state.isLoading = true;
        //state.isRefreshing = true;
      })
      .addCase(authRefreshThunk.fulfilled, (state, {payload}) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.isRefreshing = true;
        console.log('pay aust', payload);
      })
      .addCase(authRefreshThunk.rejected, (state, {payload}) => {
        state.isLoading = false;
        state.isRefreshing = false;
        state.user = { name: null, email: null };
        state.token = '';
      })
  },
});

const persistConfig = {
    key: 'Auth',
    storage,
    whitelist: ['token', 'user'],
}

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
