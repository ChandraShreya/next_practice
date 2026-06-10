"use client"
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slice/counterSlice";
import productSlice from "../slice/productSlice";

export const store = configureStore({
    reducer:{
        counter:counterSlice.reducer,
        product:productSlice.reducer,
    }
})