import { useSelector } from 'react-redux';
import BookItem from './BookItem';

const BookList = () => {
  const books = useSelector((state) => state.books);
  return (
    <div>
      {books.map((bookItem) => (
        <BookItem key={bookItem.itemId} bookItem={bookItem} />
      ))}
    </div>
  );
};

export default BookList;
