import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "ui",
    initialState: {
        IsLogedin: localStorage.getItem('isLogedin') ? localStorage.getItem('isLogedin') : false,
        token: localStorage.getItem('token') ? localStorage.getItem('token') : "",
        userProfile: {},
    },
    reducers: {
        ToggleIsLogedin(state, action) {
            state.IsLogedin = action.payload;
        },
        updateToken(state, action) {
            state.token = action.payload;
        },
        updateUserProfile(state, action) {
            state.userProfile = action.payload;
        },
    },
});

export const authActions = authSlice.actions;

export default authSlice;
