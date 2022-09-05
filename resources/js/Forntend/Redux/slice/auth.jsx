import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "ui",
    initialState: {
        IsLogedin: localStorage.getItem('isLogedin') ? localStorage.getItem('isLogedin') : false,
        token: localStorage.getItem('token') ? localStorage.getItem('token') : "",
    },
    reducers: {
        ToggleIsLogedin(state) {
            state.IsLogedin = !state.IsLogedin;
        },
    },
});

export const authActions = authSlice.actions;

export default authSlice;
