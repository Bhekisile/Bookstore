import '../styles/BookForm.css';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const BookForm = () => {
  const dispatch = useDispatch();
  return (
    <div className="containerCreateBooks">
      <h3>ADD NEW BOOK</h3>
      <form>
        <input type="text" placeholder="Book Title" />
        <input type="text" placeholder="Book Author" />
        <select className="select" value="action">
          <option value="action">Action</option>
          <option value="scienceFiction">Science Fiction</option>
          <option value="economy">Economy</option>
        </select>
        <button
          className="btn"
          type="submit"
          onClick={() => {
            dispatch(addBook);
          }}
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default BookForm;
