import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  active: null,
  artists: [],
};

export const artistSlice = createSlice({
  name: "artist",
  initialState: initialState,
  reducers: {
    setActiveArtist: (state, action) => {
      state.active = action.payload;
    },
    setArtists: (state, action) => {
      state.artists = action.payload;
    },
  },
});

export const { setActiveArtist, setArtists } = artistSlice.actions;
