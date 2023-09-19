const { createSlice } = require("@reduxjs/toolkit");

const initIntake = {
    isLoading: false,
    personInfo: {
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
              state.personInfo = payload;
            },
          },
    }

})

export const intakeReducer = intakeSlice.reducer;
export const {addPersonInfo} = intakeSlice.actions;