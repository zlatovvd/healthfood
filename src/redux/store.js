import { configureStore } from "@reduxjs/toolkit";
import { productsReduser } from "./products/productsSlice";

export const store = configureStore({
    reducer: {
        products: productsReduser
    }
})