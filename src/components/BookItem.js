import React from 'react';
import PropTypes from 'prop-types';

const BookItem = ({ book }) => {
  // console.log(Array.isArray(book));
  <div className="containerRender">
    <div className="renderLeft">
      <p>{ book.type }</p>
      <h4>{ book.title }</h4>
      <p>{ book.author }</p>
      <ul className="list">
        <li>Comments</li>
        <li className="listTwo">Remove</li>
        <li>Edit</li>
      </ul>
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
  </div>;
};

BookItem.propTypes = {
  book: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default BookItem;
