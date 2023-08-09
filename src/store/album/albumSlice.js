import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  albums: [],
};

export const albumSlice = createSlice({
  name: "album",
  initialState: initialState,
  reducers: {
    setAlbums: (state, action) => {
      state.albums = action.payload;
    },
  },
});

export const { setAlbums } = albumSlice.actions;
