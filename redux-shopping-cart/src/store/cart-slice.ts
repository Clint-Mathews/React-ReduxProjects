import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    itemList:[] as any,
    totalQuantity: 0,
    showCart: false,
    totalPrice : 0
};
const cartSlice = createSlice({
    name : 'cart',
    initialState : initialState,
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.itemList.find((item : any) => item.id === newItem.id);
            if(existingItem) {
                existingItem.qty++;
                existingItem.totalPrice += newItem.price
            } else {
                state.totalQuantity++;
                state.itemList.push({
                    id: newItem.id,
                    img: newItem.img,
                    price : newItem.price,
                    qty: 1,
                    totalPrice: newItem.price,
                    name : newItem.name
                });
            }
            state.totalPrice += newItem.price
        },
        addQty(state,action){
            const indexToUpdate = state.itemList.indexOf(state.itemList.find((item : any) => item.id === action.payload));
            state.itemList[indexToUpdate].qty++;
            state.itemList[indexToUpdate].totalPrice+=state.itemList[indexToUpdate].price;
            state.totalPrice += state.itemList[indexToUpdate].price;
        },
        removeQty(state,action){
            const indexToUpdate = state.itemList.indexOf(state.itemList.find((item : any) => item.id === action.payload));
            state.itemList[indexToUpdate].qty--;
            state.itemList[indexToUpdate].totalPrice-=state.itemList[indexToUpdate].price;
            state.totalPrice -= state.itemList[indexToUpdate].price;
        },
        removeFromCart(state, action) {
            const removeIndex = state.itemList.indexOf(state.itemList.find((item : any) => item.id === action.payload));
            let totalPrice = state.itemList[removeIndex].totalPrice
            state.itemList.splice(removeIndex,1);
            state.totalQuantity--;
            state.totalPrice -= totalPrice;
        },
        setShowHideCart(state) {
            state.showCart = !state.showCart;
        },
        placeOrder(state){
            state.itemList = initialState.itemList
            state.totalQuantity = initialState.totalQuantity
            state.showCart = initialState.showCart
            state.totalPrice = initialState.totalPrice
        },
        replaceData(state, action) {
            state.totalQuantity = action.payload.totalQuantity ? action.payload.totalQuantity : state.totalQuantity;
            state.itemList = action.payload.itemList ? action.payload.itemList : state.itemList;
            state.showCart = action.payload.showCart ? action.payload.showCart : state.showCart;
            state.totalPrice = action.payload.totalPrice ? action.payload.totalPrice : state.totalPrice;
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice;