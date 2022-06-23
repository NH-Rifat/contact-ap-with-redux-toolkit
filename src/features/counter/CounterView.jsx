import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement, reset} from './CounterSlice'

const CounterView = () => {
  const count = useSelector((state) => state.counter.count);
  // console.log(count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter App Using Redux toolkit</h1>
      <h1>Count: {count}</h1>
      <button onClick={()=>{dispatch(increment())}}>Increment</button>
      <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
      <button onClick={()=>{dispatch(reset())}}>Reset</button>
    </div>
  );
};

export default CounterView;
