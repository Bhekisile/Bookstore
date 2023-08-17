import '../styles/RenderBooks.css';

function RenderBooks() {
  return (
    <div className="containerRender">
      <div className="renderLeft">
        <p>Action</p>
        <h4>The Hunger Games</h4>
        <p>Suzanne Collins</p>
        <ul className="list">
          <li>Comments</li>
          <li className="listTwo">Remove</li>
          <li>Edit</li>
        </ul>
      </div>
      <div className="renderRight">
        <ul>
          <li>
            circle
            <br />
            64%
            <br />
            completed
          </li>
          <li>
            CURRENT CHAPTER
            <br />
            Chapter 17
            <br />
            <button type="submit">UPDATE PROGRESS</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default RenderBooks;
