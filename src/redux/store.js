import { configureStore } from "@reduxjs/toolkit";
import categorySlices from "./categorySlices";
import productSlice from "./productSlice";

export const store = configureStore({
  reducer: {
    categories: categorySlices,
    products: productSlice,
  },
});
