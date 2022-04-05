import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const counter = useSelector((state : any) => state.counter)
  const dispatch = useDispatch();
  const increment = () => {dispatch({type : 'INC'})}
  const decrement = () => {dispatch({type : 'DECRE'})}
  const clear = () => {dispatch({type : 'CLEAR'})}
  const addBy = () => {dispatch({type : 'ADDBY', payload:10})}
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
