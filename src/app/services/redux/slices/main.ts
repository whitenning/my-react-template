import { createSlice } from "@reduxjs/toolkit";

export const mainSlice = createSlice({
  name: "main",
  initialState: {
    host: "http://localhost:8000",
    crumbs: [{ title: "Home", path: "/home" }],
  },
  reducers: {
    setCrumbs: (state, action) => {
      state.crumbs = action.payload;
    },
  },
});

export const { setCrumbs } = mainSlice.actions;
export default mainSlice.reducer;
