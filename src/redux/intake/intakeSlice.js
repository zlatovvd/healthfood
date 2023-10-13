import { intakeGetThunk, intakeUpdateThunk } from "./intakeThunk";

const { createSlice } = require("@reduxjs/toolkit");

const initIntake = {
    isLoading: false,
    personInfo: {
      height: '178',
      age: '50',
      cweight: '95',
      dweight: '85',
      typeblood: 1,
    },
  };

const intakeSlice = createSlice({
    name: 'intake',
    initialState: initIntake,
    reducers: {
        addPersonInfo: {
            reducer(state, { payload }) {
              console.log('payload intake', payload)
              state.personInfo = payload;
            },
          },
    },
    extraReducers: builder => {
      builder.addCase(intakeGetThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(intakeGetThunk.fulfilled, (state, {payload}) => {
        state.personInfo = payload;
        state.isLoading = false;
      })
      .addCase(intakeGetThunk, state => {
        state.isLoading = false;
      })
      builder.addCase(intakeUpdateThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(intakeUpdateThunk.fulfilled, (state, {payload}) => {
        state.personInfo = payload;
        state.isLoading = false;
      })
      .addCase(intakeUpdateThunk.rejected, state => {
        state.isLoading = false;
      })
    }

})

export const intakeReducer = intakeSlice.reducer;
export const {addPersonInfo} = intakeSlice.actions;