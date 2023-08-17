import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';

function Navigation() {
  return (
    <div className="nav-bar">
      <h1>Bookstore CMS</h1>
      <div className="nav-side">
        <nav className="nav-link">
          <NavLink to="/">BOOKS</NavLink>
          <NavLink to="/categories">CATEGORIES</NavLink>
        </nav>
        <div>icon</div>
      </div>
    </div>
  );
}

export default Navigation;
