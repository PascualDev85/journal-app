import { createSlice } from "@reduxjs/toolkit";

export const navbarSlice = createSlice({
  name: "navbar",
  initialState: {
    showComponentSlider: false,
    showComponentModalLogout: false,
  },
  reducers: {
    toggleShowComponentSlider: (state) => {
      state.showComponentSlider = !state.showComponentSlider;
    },
    toggleShowComponentModal: (state) => {
      state.showComponentModalLogout = !state.showComponentModalLogout;
    },
    clearShow: (state) => {
      state.showComponentSlider = false;
      state.showComponentModalLogout = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  toggleShowComponentSlider,
  toggleShowComponentModal,
  clearShow,
} = navbarSlice.actions;
