import { createSlice  } from '@reduxjs/toolkit';


  const initialState = {
    counter: 0,
    name: '',
  };


export const playerSlice = createSlice({
    name: 'player',
    initialState: initialState,
    reducers: {
        increment: (state,  action ) => {
            state.counter += action.payload.counter;
        },
        setActiveArtist: (state,  action ) => {
            state.name = action.payload.name;
        },
    }
});


export const { increment, setActiveArtist } = playerSlice.actions;
