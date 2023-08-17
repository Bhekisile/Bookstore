import { Route, Routes } from 'react-router-dom';
import Books from './routes/Books';
import Categories from './routes/Categories';
import Navigation from './components/Navigation';
import './styles/App.css';

function App() {
  return (
    <div className="wrapper">
      <Navigation />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
