import { authLoginThunk, authLogoutThunk, authRefreshThunk, authRegisterThunk } from './authThunk';
import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authInitialState = {
  user: {name:null, email:null},
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
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
      .addCase(authRegisterThunk.rejected, state => {
        state.isLoading = false;
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
      .addCase(authLoginThunk.rejected, state => {
        state.isLoading = false;
      })
      .addCase(authLogoutThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(authLogoutThunk.fulfilled, (state, {payload}) => {
        state = authInitialState;
      })
      .addCase(authLogoutThunk.rejected, state => {
        state.isLoading = false;
      })
      .addCase(authRefreshThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(authRefreshThunk.fulfilled, (state, {payload}) => {
        state.user = payload;
        state.isLoading = false;
      })
      .addCase(authRefreshThunk.rejected, state => {
        state.isLoading = false;
      })
  },
});

const persistConfig = {
    key: 'Auth',
    storage,
    whitelist: ['token'],
}

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
