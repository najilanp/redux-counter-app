import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

export const store=configureStore({
    reducer:{
//define different reducer as ley value pair
    counterReducer
    }
})