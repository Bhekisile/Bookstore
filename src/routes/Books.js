import RenderBooks from '../components/RenderBooks';
import '../styles/Books.css';
import CreateNewBooks from '../components/BookForm';

function Books() {
  return (
    <div>
      <RenderBooks />
      <CreateNewBooks />
    </div>
  );
}

export default Books;
