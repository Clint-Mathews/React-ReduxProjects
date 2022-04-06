import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from './pages/Auth';
import Landing from './pages/Landing';
import AppRouter from './router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import notify from './utils/toast.service';
import { getCartData, sendCartData } from './store/cart-actions';
import { getAuth, updateAuth } from './store/auth-actions';

function App() {
  const cart = useSelector((state:any) => state.cart);
  const isLoggedIn = useSelector((state:any) => state.auth);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAuth());
    dispatch(getCartData());
  },[dispatch]);

  useEffect(()=>{
    dispatch(sendCartData(cart));
  },[cart,dispatch]);

  useEffect(()=>{
    dispatch(updateAuth(isLoggedIn));
  },[isLoggedIn,dispatch]);
  
  return (
    <div>
      <ToastContainer draggable={false} />
      <AppRouter />
    </div>
  );
}

export default App;
