import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "../features/productsSlice";

const store = configureStore({
  reducer: {
   products : ProductsReducer,
    
  },
});

export default store;
