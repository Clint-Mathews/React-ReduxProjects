import notify from "../utils/toast.service";
import { authActions } from "./auth-slice";
import { cartActions } from "./cart-slice";

export const updateAuth = (loggedIn : any) => {
    console.log(loggedIn);
    return async (dispatch : any) => {
       const sendReq = async () =>{
           //notify("Sending request to firebase").warn();
           const res = await fetch(process.env.REACT_APP_FIREBASE_URL+ "auth.json",{
             method: "PUT",
             body: JSON.stringify(loggedIn)
           });
           const data = await res.json();
           //notify("Update to firebase successful").success();
         };
         try{
           await sendReq();
         } catch(err) {
           notify("Update to firebase failed").error();
         }
    }
}

export const getAuth = () => {
    return async (dispatch : any) => {
       const sendReq = async () =>{
           //notify("Sending request to get firebase auth").warn();
           const res = await fetch(process.env.REACT_APP_FIREBASE_URL+ "auth.json",{
             method: "GET"
           });
           const data = await res.json();
           //notify("Get auth from firebase successful").success();
           return data;
         };
         try{
           const cartData = await sendReq();
           console.log(cartData);
           dispatch(authActions.updateLoginStatus(cartData));
         } catch(err) {
           notify("Get auth from firebase failed").error();
         }
    }
}