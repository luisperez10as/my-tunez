import { configureStore } from '@reduxjs/toolkit';
import { playerSlice } from './player';
import { localDataSlice } from './localstorage';
import { artistSlice } from './artist';
import { albumSlice } from './album';
import { trackSlice } from './track';
import { formSlice } from './form';

const store = configureStore({
  reducer: {
    localData : localDataSlice.reducer,
    player: playerSlice.reducer,
    artist: artistSlice.reducer,
    album: albumSlice.reducer,
    track: trackSlice.reducer,
    form: formSlice.reducer,
  }
});

export { store };