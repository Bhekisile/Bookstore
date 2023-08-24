import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/POkfoISJQ9RXQgYIesxH/books';

export const getBookItems = createAsyncThunk(
  'books/getBookItems',
  async (_, thunkAPI) => {
    try {
      // console.log(thunkAPI);
      const response = await axios.get(apiURL);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Request failed');
    }
  },
);

export const addBook = createAsyncThunk(
  'books/addBook',
  async (book, thunkAPI) => {
    try {
      const response = await axios.post(apiURL, book);

      if (response.status === 201) {
        thunkAPI.dispatch(getBookItems());
      }
      return null;
    } catch (error) {
      return thunkAPI.rejectWithValue('Post request failed');
    }
  },
);

export const deleteBook = createAsyncThunk(
  'books/deleteBook',
  async (itemId, thunkAPI) => {
    try {
      const response = await axios.delete(`${apiURL}/${itemId}`);

      if (response.status === 201) {
        thunkAPI.dispatch(getBookItems());
      }
      return null;
    } catch (error) {
      return thunkAPI.rejectWithValue('Could not delete book');
    }
  },
);

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    const pendingReducer = (state) => {
      state.isLoading = true;
      state.error = null;
    };

    const fulfilledReducer = (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    };

    const rejectedReducer = (state) => {
      state.isLoading = false;
      state.error = true;
    };

    builder
      .addCase(getBookItems.pending, pendingReducer)
      .addCase(getBookItems.fulfilled, fulfilledReducer)
      .addCase(getBookItems.rejected, rejectedReducer)
      .addCase(addBook.pending, pendingReducer)
      .addCase(addBook.rejected, rejectedReducer)
      .addCase(deleteBook.pending, pendingReducer)
      .addCase(deleteBook.rejected, rejectedReducer);
  },
});

export default bookSlice.reducer;
