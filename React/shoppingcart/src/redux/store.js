import { configureStore, createReducer } from "@reduxjs/toolkit";
import CartSlice from "./Slices/CartSlice";

export const store = configureStore({
    reducer: {
        cart: CartSlice
    }
});