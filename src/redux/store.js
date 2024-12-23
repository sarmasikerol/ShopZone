import { configureStore } from "@reduxjs/toolkit";
import categorySlices from "./categorySlices";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";

export const store = configureStore({
  reducer: {
    categories: categorySlices,
    products: productSlice,
    carts: cartSlice,
  },
});
