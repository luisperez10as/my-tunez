import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tracks: [],
  track: null,
};

export const trackSlice = createSlice({
  name: "track",
  initialState: initialState,
  reducers: {
    setTracks: (state, action) => {
      state.tracks = action.payload;
    },
    setActiveTrack: (state, action) => {
      let trackId = action.payload;
      state.track = state.tracks.find(track => track.id === trackId);
    },
  },
});


export const { setTracks, setActiveTrack } = trackSlice.actions;
