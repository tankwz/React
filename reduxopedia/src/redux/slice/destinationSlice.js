import { createSlice } from '@reduxjs/toolkit';
import { resetAction } from '../action/resetAction';

const initialState = () => ({
  destination: [
    { name: 'Hong Kong', day: 7, fact: 'Sounds like Kong' },
    { name: 'Japan', day: 10, fact: 'Has samurai' },
    { name: 'US', day: 3, fact: 'uhhh, Has Florida' },
  ],
  selectedDestination: null,
});

export const destinationSlice = createSlice({
  name: 'DestinationName',
  initialState: initialState,
  reducers: {
    setSelectDes: (state, action) => {
      state.selectedDestination = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetAction, (state, action) => {
      state.selectedDestination = initialState.selectedDestination;
    });
  },
});

export const { setSelectDes } = destinationSlice.actions;

export const desReducer = destinationSlice.reducer;
