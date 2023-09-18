const { createSlice } = require("@reduxjs/toolkit")

const authInitialState = {
    user: null,
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState
})

//export const authReducer