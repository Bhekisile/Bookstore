import { createSlice } from '@reduxjs/toolkit';
// import Books from '../../components/Books';

const initialState = [
  {
    item_id: 1,
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    item_id: 2,
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    item_id: 3,
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
  },
];

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
// console.log(booksSlice);
export const {
  addBook, removeBook,
} = booksSlice.actions;

export default booksSlice.reducer;
