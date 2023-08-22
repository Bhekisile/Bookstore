import React from 'react';
import PropTypes from 'prop-types';
import '../styles/BookItem.css';

const BookItem = ({ book }) => (
  <>
    <div className="containerRender">
      <div className="renderLeft">
        <p>{book.type}</p>
        <h3>{book.title}</h3>
        <p>{book.author}</p>
        <button type="button">Comment</button>
        <button type="button">Remove</button>
        <button type="button">Edit</button>
      </div>
      <div className="renderRight">
        <div>
          <p>Progress</p>
          <div>
            <h4>{book.percentage}</h4>
            <h4>Completed</h4>
          </div>
        </div>
        <div>
          <p>Current Chapter</p>
          <p>{book.chapter}</p>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  </>
);
BookItem.propTypes = {
  book: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      chapter: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default BookItem;
