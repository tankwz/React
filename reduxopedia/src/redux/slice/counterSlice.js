import { createSlice } from '@reduxjs/toolkit';
import { resetAction } from '../action/resetAction';
const initialState = { count: 10 };
export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    //action
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    multiply: (state, action) => {
      state.count *= action.payload;
    },
    divide: (state, action) => {
      state.count /= action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetAction, (state, action) => {
      state.count = initialState.count;
    });
  },
});

export const { increment, decrement } = counterSlice.actions;
export const { multiply, divide } = counterSlice.actions;
//export const counterReducer = counterSlice.reducer;
export const counterReducer = counterSlice.reducer;
