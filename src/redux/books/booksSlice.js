import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      itemId: 1,
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
      percentage: 64,
      chapter: 'Chapter 17',
    },
    {
      itemId: 2,
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
      percentage: 8,
      chapter: 'Chapter 3: "A lesson learned"',
    },
    {
      itemId: 3,
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
      percentage: 0,
      chapter: 'Introduction',
    },
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.itemId = action.payload.itemId;
      state.title = action.payload.title;
      state.author = action.payload.author;
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.books = state.books.filter((book) => book.itemId !== bookId);
    },
  },
});
export const {
  addBook, removeBook,
} = booksSlice.actions;

export default booksSlice.reducer;
