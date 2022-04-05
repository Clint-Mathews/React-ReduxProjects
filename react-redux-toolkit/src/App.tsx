import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from './store';

function App() {
  const counter = useSelector((state : any) => state.counter)
  const dispatch = useDispatch();
  const increment = () => {dispatch(actions.increment())}
  const decrement = () => {dispatch(actions.decrement())}
  const clear = () => {dispatch(actions.clear())}
  const addBy = () => {dispatch(actions.addBy(10))}
  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addBy}>AddBy</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
}

export default App;
