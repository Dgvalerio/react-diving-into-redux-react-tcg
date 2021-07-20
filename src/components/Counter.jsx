import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { counterActions } from '../store/counter';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const { counter, showCounter } = useSelector((state) => state.counter);

  const toggleCounterHandler = () => dispatch(counterActions.toggle());

  const incrementHandler = () => dispatch(counterActions.increment());

  const increaseHandler = () => dispatch(counterActions.increase(10));

  const decrementHandler = () => dispatch(counterActions.decrement());

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button type="button" onClick={incrementHandler}>
          Increment
        </button>
        <button type="button" onClick={increaseHandler}>
          Increment by 5
        </button>
        <button type="button" onClick={decrementHandler}>
          Decrement
        </button>
      </div>
      <button type="button" onClick={toggleCounterHandler}>
        Toggle Counter
      </button>
    </main>
  );
};

export default Counter;
