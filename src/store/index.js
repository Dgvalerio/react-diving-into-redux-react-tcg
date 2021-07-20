/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { createStore } from 'redux';

const initialState = { counter: 0, showCounter: true };

createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter += 1;
    },
    increase(state, action) {
      state.counter += action.amount;
    },
    decrement(state) {
      state.counter -= 1;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const INCREMENT = 'increment';
export const INCREASE = 'increase';
export const DECREMENT = 'decrement';
export const TOGGLE = 'toggle';

const counterReducer = (state = initialState, action) => {
  if (action.type === INCREMENT)
    return { ...state, counter: state.counter + 1 };
  if (action.type === INCREASE)
    return { ...state, counter: state.counter + action.amount };
  if (action.type === DECREMENT)
    return { ...state, counter: state.counter - 1 };
  if (action.type === TOGGLE) {
    return { ...state, showCounter: !state.showCounter };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
