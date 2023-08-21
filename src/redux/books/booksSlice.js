import { createSlice } from '@reduxjs/toolkit';
import Books from '../../components/Books';

const initialState = {
  Books,
  id: '',
  type: '',
  title: '',
  author: '',
  percentage: '',
  chapter: '',
};

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.book = state.Books.find((book) => book.id === action.payload.id);
      state.type = action.payload.type;
      state.title = action.payload.title;
      state.author = action.payload.author;
      state.percentage = action.payload.percentage;
      state.chapter = action.payload.chapter;
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.Books = state.Books.filter((book) => book.id !== bookId);
    },
  },
});

export const {
  addBook, removeBook,
} = booksSlice.actions;

export default booksSlice.reducer;
