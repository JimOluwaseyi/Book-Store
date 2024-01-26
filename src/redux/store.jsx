import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../redux/book/bookSlice";
import categoriesReducer from "../redux/categories/categoriesSlice";

export const store = configureStore({
  reducer: {
    books: bookReducer,
    categories: categoriesReducer,
  },
});
