import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import '../styles/BookForm.css';

export default function AddBooks() {
  const dispatch = useDispatch();
  const initialState = {
    title: '',
    author: '',
    category: '',
  };
  const [bookData, setBookData] = useState(initialState);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setBookData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleAddBook = (e) => {
    e.preventDefault();

    const { title, author, category } = bookData;

    if (title && author && category) {
      const newBook = {
        item_id: nanoid(),
        ...bookData,
      };

      dispatch(addBook(newBook));
      setBookData(initialState);
    }
  };

  return (
    <div className="containerCreateBooks">
      <hr className="line" />
      <form>
        <h3>ADD NEW BOOK</h3>
        <div className="book-form">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={bookData.title}
            onChange={inputChangeHandler}
          />
          <input
            type="text"
            name="author"
            placeholder="Author"
            value={bookData.author}
            onChange={inputChangeHandler}
          />
          <select
            name="category"
            value={bookData.category}
            onChange={inputChangeHandler}
          >
            <option value="">Select Category</option>
            <option value="Action">Action</option>
            <option value="Science/Fiction">Science/Fiction</option>
            <option value="Economy">Economy</option>
          </select>
          <button type="button" className="add-btn" onClick={handleAddBook}>
            ADD BOOK
          </button>
        </div>
      </form>
    </div>
  );
}
