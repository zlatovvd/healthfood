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
    }

})

export const intakeReducer = intakeSlice.reducer;
export const {addPersonInfo} = intakeSlice.actions;