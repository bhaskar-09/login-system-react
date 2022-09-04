import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: "ui",
    initialState: { IsLoader: false },
    reducers: {
        toggleLoader(state) {
            state.IsLoader = !state.IsLoader;
        },
    },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
