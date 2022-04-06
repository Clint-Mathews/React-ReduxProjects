import notify from "../utils/toast.service";
import { cartActions } from "./cart-slice";

export const sendCartData = (cart : any) => {
    console.log(cart);
    return async (dispatch : any) => {
       const sendReq = async () =>{
           //notify("Sending request to firebase").warn();
           const res = await fetch(process.env.REACT_APP_FIREBASE_URL+ "cartitems.json",{
             method: "PUT",
             body: JSON.stringify(cart)
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

export const getCartData = () => {
    return async (dispatch : any) => {
       const sendReq = async () =>{
           //notify("Sending request to get firebase data").warn();
           const res = await fetch(process.env.REACT_APP_FIREBASE_URL+"cartitems.json",{
             method: "GET"
           });
           const data = await res.json();
           //notify("Get data from firebase successful").success();
           return data;
         };
         try{
           const cartData = await sendReq();
           dispatch(cartActions.replaceData(cartData));
         } catch(err) {
           notify("Get data from firebase failed").error();
         }
    }
}