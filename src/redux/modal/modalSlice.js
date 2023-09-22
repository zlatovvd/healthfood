import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        isOpen:false
    },
    reducers: {
        open: {
            reducer(state, {payload}) {
                console.log('modalSlice payload', payload);
                state.isOpen = payload;
            }
        }
    }
})

export const modalReducer = modalSlice.reducer;

export const {open} = modalSlice.actions;