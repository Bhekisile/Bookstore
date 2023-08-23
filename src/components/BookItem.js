import React from 'react';
import PropTypes from 'prop-types';
import '../styles/BookItem.css';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const BookItem = ({ bookItem }) => {
  const {
    category, title, author, percentage, chapter, itemId,
  } = bookItem;
  const dispatch = useDispatch();

  return (
    <div className="containerRender">
      <div className="renderLeft">
        <p>{category}</p>
        <h3>{title}</h3>
        <p>{author}</p>
        <button type="button">Comment</button>
        <button
          type="button"
          onClick={() => {
            dispatch(removeBook(itemId));
          }}
        >
          Remove
        </button>
        <button type="button">Edit</button>
      </div>
      <div className="renderRight">
        <div>
          <p>Progress</p>
          <div>
            <h4>{percentage}</h4>
            <h4>Completed</h4>
          </div>
        </div>
        <div>
          <p>Current Chapter</p>
          <p>{chapter}</p>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

BookItem.propTypes = {
  bookItem: PropTypes.arrayOf(
    PropTypes.shape({
      itemId: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      chapter: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default BookItem;
