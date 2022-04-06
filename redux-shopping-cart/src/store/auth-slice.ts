import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name : 'auth',
    initialState : {
        isLoggedIn : false
    },
    reducers : {
        login(state) {
            state.isLoggedIn = true;
        },
        logout(state) {
            state.isLoggedIn = false;
        },
        updateLoginStatus(state,action) {
            state.isLoggedIn = action.payload.isLoggedIn
        }
    }
});

export const authActions = authSlice.actions;

export default authSlice;