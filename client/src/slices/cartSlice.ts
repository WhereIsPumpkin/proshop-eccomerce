import { createSlice } from "@reduxjs/toolkit";

const json = localStorage.getItem("cart");
const initialState = json ? JSON.parse(json) : {cartItems: []};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {}
})

export default cartSlice.reducer