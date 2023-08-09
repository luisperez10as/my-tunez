import { createSlice } from '@reduxjs/toolkit';
import { saveToLocalStorage, loadFromLocalStorage } from '../../utils/localStorageUtil';

const initialState = {
    data: loadFromLocalStorage('userData') || "Default",
  };

export const localDataSlice = createSlice({
    name: 'localData',
    initialState: initialState,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
            saveToLocalStorage('userData', action.payload);
        },
    }
});


export const { setData } = localDataSlice.actions;
