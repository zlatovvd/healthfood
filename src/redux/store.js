import { configureStore } from "@reduxjs/toolkit";
import { productsReduser } from "./products/productsSlice";
import { authReducer } from "./auth/authSlice";
import { modalReducer } from "./modal/modalSlice";
import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
    persistStore,
  } from 'redux-persist';
import { intakeReducer } from "./intake/intakeSlice";
import { diaryReducer } from "./diary/diarySlice";

export const store = configureStore({
    reducer: {
        products: productsReduser,
        auth: authReducer,
        modal: modalReducer,
        intake: intakeReducer,
        diary: diaryReducer
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
})

export const persistor = persistStore(store);