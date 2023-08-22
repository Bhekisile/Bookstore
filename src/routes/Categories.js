import { useSelector } from 'react-redux';

function Categories() {
  const { status } = useSelector((store) => store.categories);
  return (
    <div>
      <h2>{ status }</h2>
    </div>
  );
}

export default Categories;
