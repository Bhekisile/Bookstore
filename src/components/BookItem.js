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

  const style = {
    visibility: 'hidden',
    height: 0,
    width: 0,
  };

  const renderBook = (itemId, book) => {
    const { category, title, author } = book;

    return (
      <div key={itemId} className="containerRender">
        <div className="renderLeft">
          <p className="category">{category}</p>
          <h2 className="title">{title}</h2>
          <p className="author">{author}</p>
          <div className="buttons">
            <button className="clear-btn first" type="button">
              Comment
            </button>
            <button
              className="clear-btn side"
              type="button"
              onClick={() => dispatch(deleteBook(itemId))}
            >
              Remove
            </button>
            <button className="clear-btn third" type="button">
              Edit
            </button>
          </div>
        </div>
        <div className="renderRight">
          <div className="flex-left">
            <div className="progress-bar">
              <progress value="68" min="0" max="100" style={style}>
                75%
              </progress>
            </div>
            <div className="progress">
              <p className="percent">68%</p>
              <p className="completed">Completed</p>
            </div>
          </div>
          <div className="flex-right">
            <p className="current">Current Chapter</p>
            <p className="chapter">Chapter 12</p>
            <button className="btn-chapter" type="button">
              UPDATE PROGRESS
            </button>
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
