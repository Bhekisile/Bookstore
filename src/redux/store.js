import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/booksSlice';
import categoriesReducer from './categories/CategoriesSlice';

const rootReducer = {
  books: bookReducer,
  categories: categoriesReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
