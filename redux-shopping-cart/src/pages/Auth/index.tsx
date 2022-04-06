
import React, { useEffect, useReducer, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ShopMeLogo from "../../components/ShopMeLogo";
import { authActions } from "../../store/auth-slice";
import notify from "../../utils/toast.service";
const Auth = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state:any) => state.auth.isLoggedIn);
    const navigate = useNavigate();
    const initialState = {
        username : "",
        password: ""
    }
    const [loginCred, dispatchloginCred] = useReducer(reducer, initialState);
    function reducer(state = initialState, action:any) {
        switch (action.type) {
          case 'username':
            return { ...state, username: action.payload};
          case 'password':
            return {  ...state, password: action.payload};
          case 'reset':
                return initialState;
          default:
        }
        return state;
      }
    const login = () => {
        if(loginCred.username === process.env.REACT_APP_USERNAME && loginCred.password === process.env.REACT_APP_PASSWORD) {
            dispatch(authActions.login())
            notify("Login successful").success();
            navigate('/dashboard');
        } else {
            notify("Invalid credentials").error();
        }
    }
    useEffect(()=>{
      if(isLoggedIn){
        navigate('/dashboard');
      }
    },[isLoggedIn, navigate]);

    return <div className="w-screen h-screen flex flex-col justify-center content-center items-center">
        <ShopMeLogo />
    <div className="mb-3 xl:w-96">
      <label  className="form-label inline-block mb-2 text-gray-700"
        >Username</label
      >
      <input
        type="text"
        className="
          form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
        id="exampleText0"
        placeholder="Username"
        value={loginCred.username}
        onChange={(e)=>dispatchloginCred({ type: 'username', payload: e.target.value })}
      />
    </div>
    <div className="mb-3 xl:w-96">
    <label  className="form-label inline-block mb-2 text-gray-700"
      >Password</label
    >
    <input
      type="password"
      className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      value={loginCred.password}
      placeholder="Password"
      onChange={(e)=>dispatchloginCred({ type: 'password', payload: e.target.value })}
    />
  </div>
  <div>
  <button
    onClick={login}
    type="button"
    data-mdb-ripple="true"
    data-mdb-ripple-color="light"
    className="mr-2 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
  >Login</button>
  <button
    onClick={()=>{dispatchloginCred({ type: 'reset'});notify("Credentials cleared").info();}}
    type="button"
    data-mdb-ripple="true"
    data-mdb-ripple-color="light"
    className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
  >Clear</button>
  </div>
  </div>
}
export default Auth;