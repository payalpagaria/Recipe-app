import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./slice/slicer";
export const store = configureStore({
    reducer:{
        recipe:postSlice,
    }
})