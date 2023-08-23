import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import BookItem from './BookItem';
import { getBookItems } from '../redux/books/booksSlice';

const BookList = () => {
  const { books, isLoading, error } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookItems());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <div>Loading ........</div>}
      {error && <div>Could not fetch data.</div>}
      {books.map((bookItem) => (
        <BookItem key={bookItem.itemId} bookItem={bookItem} />
      ))}
    </div>
  );
};

export default BookList;
