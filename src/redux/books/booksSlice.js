import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/POkfoISJQ9RXQgYIesxH/books';

export const getBookItems = createAsyncThunk(
  'books/getBookItems', async (_, thunkAPI) => {
    try {
      console.log(thunkAPI);
      // console.log(thunkAPI.getState());
      const resp = await axios.get(apiUrl);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBookItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBookItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(getBookItems.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const {
  addBook, removeBook,
} = booksSlice.actions;

export default booksSlice.reducer;
