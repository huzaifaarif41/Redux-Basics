import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from './../store/counter';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter); //first .counter, we make React Redux to aware of the fact that we wanna dive into that slice in the end that where in the store folder in index.js file, that into the state produced by this slicer's reducer and then in that state slice, we have a property named counter, if that property name is changed as value, so the code will be state.counter.value
  const show = useSelector((state) => state.counter.showCounter);

  //useSelector is custom hook that allows to automatically select a part of our state managed by store

  const incrementHandler = () => {
    dispatch(counterActions.increment()); //this will execute as a method with () double brackets
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(10)); // redux toolkit will do for us here that it automatically create action objects which dispatches the some object like {type: Some Unique Identifier, payload:10} and that field name(payload) is not upto us but Redux Toollit uses here automatically.
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
