import { createSlice } from "@reduxjs/toolkit";

export const navbarSlice = createSlice({
  name: "navbar",
  initialState: {
    showComponentSlider: false,
    showComponentModalLogout: false,
    showComponentModalDeleteNote: false,
  },
  reducers: {
    toggleShowComponentSlider: (state) => {
      state.showComponentSlider = !state.showComponentSlider;
    },
    toggleShowComponentModalLogout: (state) => {
      state.showComponentModalLogout = !state.showComponentModalLogout;
    },
    toggleShowComponentModalDeleteNote: (state) => {
      state.showComponentModalDeleteNote = !state.showComponentModalDeleteNote;
    },
    clearShow: (state) => {
      state.showComponentSlider = false;
      state.showComponentModalLogout = false;
      state.showComponentModalDeleteNote = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  toggleShowComponentSlider,
  toggleShowComponentModalLogout,
  toggleShowComponentModalDeleteNote,
  clearShow,
} = navbarSlice.actions;
