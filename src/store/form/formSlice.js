import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: null,
  isPopupOpen: false
};

export const formSlice = createSlice({
  name: "form",
  initialState: initialState,
  reducers: {
    addFormData: (state, action) => {
      state.formData = action.payload;
    },
    openPopup: (state) => {
      state.isPopupOpen = true;
    },
    closePopup: (state) => {
      state.isPopupOpen = false;
    },
  },
});

export const { addFormData, openPopup, closePopup  } = formSlice.actions;
