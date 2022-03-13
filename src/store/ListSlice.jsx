import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const slice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    clearState: (state, action) => initialState,
    updateState: (state, action) => [...state, action.payload],
  },
});

export const { clearState, updateState } = slice.actions;

export default slice.reducer;
