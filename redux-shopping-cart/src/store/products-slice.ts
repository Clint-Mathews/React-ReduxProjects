import { createSlice } from "@reduxjs/toolkit";
import ProductModel from "../models/ProductModel";

const productList : ProductModel[] = [
    {
        id :1,
        name : "Product1",
        img : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Eo_circle_yellow_letter-s.svg/2048px-Eo_circle_yellow_letter-s.svg.png",
        price : 12
    },
    {
        id : 2,
        name : "Product2",
        img : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Eo_circle_yellow_letter-s.svg/2048px-Eo_circle_yellow_letter-s.svg.png",
        price : 24
    },
    {
        id : 3,
        name : "Product3",
        img : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Eo_circle_yellow_letter-s.svg/2048px-Eo_circle_yellow_letter-s.svg.png",
        price : 48
    },
    {
        id : 4,
        name : "Product4",
        img : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Eo_circle_yellow_letter-s.svg/2048px-Eo_circle_yellow_letter-s.svg.png",
        price : 18
    },
    {
        id : 5,
        name : "Product5",
        img : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Eo_circle_yellow_letter-s.svg/2048px-Eo_circle_yellow_letter-s.svg.png",
        price : 10
    },
    {
        id : 6,
        name : "Product6",
        img : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Eo_circle_yellow_letter-s.svg/2048px-Eo_circle_yellow_letter-s.svg.png",
        price : 198
    }
];

const productSlice = createSlice({
    name : "products",
    initialState : {
        products : productList
    },
    reducers : {
    }
});

export const productsAction = productSlice.actions;

export default productSlice;