/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { counter: 0, showCounter: true },
  reducers: {
    increment(state) {
      state.counter += 1;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    decrement(state) {
      state.counter -= 1;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
