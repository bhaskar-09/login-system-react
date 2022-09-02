import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'ui',
  initialState: { IsLogedin: false },
  reducers: {
    ToggleIsLogedin(state) {
      state.IsLogedin = !state.IsLogedin;
    }
  }
});

export const authActions = authSlice.actions;

export default authSlice;