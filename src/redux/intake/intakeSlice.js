import { intakeGetThunk } from "./intakeThunk";

const { createSlice } = require("@reduxjs/toolkit");

const initIntake = {
    isLoading: false,
    personInfo: {
      id: '',
      height: '',
      age: '',
      cweight: '',
      dweight: '',
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
        console.log('payload!! intake', payload)
        state.isLoading = false;
      })
      .addCase(intakeGetThunk.rejected, state => {
        state.isLoading = false;
      })
    }

})

export const intakeReducer = intakeSlice.reducer;
export const {addPersonInfo} = intakeSlice.actions;