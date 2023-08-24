import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBookItems, deleteBook } from '../redux/books/booksSlice';
import '../styles/BookItem.css';

const BookItem = () => {
  const dispatch = useDispatch();
  const { books, isLoading, error } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBookItems());
  }, [dispatch]);

  const renderBook = (itemId, book) => {
    const { category, title, author } = book;

    return (
      <div key={itemId} className="containerRender">
        <div className="renderLeft">
          <p>{category}</p>
          <h3>{title}</h3>
          <p>{author}</p>
          <button type="button">Comment</button>
          <button type="button" onClick={() => dispatch(deleteBook(itemId))}>
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
        <div className="renderRight">
          <div>
            <p>
              <progress value="40" min="0" max="100">
                40%
              </progress>
            </p>
            <div>
              <p>40%</p>
              <p>Completed</p>
            </div>
          </div>
          <div>
            <p>Current Chapter</p>
            <p>Chapter 12</p>
            <button type="button">UPDATE PROGRESS</button>
          </div>
        </div>
      </div>
    );
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Could not fetch data.</p>;
  }

  if (!books) {
    return null;
  }

  return (
    <div>
      {Object.entries(books).map(([itemId, book]) => renderBook(itemId, book[0]))}
    </div>
  );
};

export default BookItem;
