import { Link } from 'react-router-dom';
import React from 'react';
import '../Navigation.css';

function Navigation() {
  return (
    <div className="nav-bar">
      <h1>Bookstore CMS</h1>
      <div className="nav-side">
        <nav className="nav-link">
          <Link to="/">Home</Link>
          <Link to="/categories">Categories</Link>
        </nav>
        <div>icon</div>
      </div>
    </div>
  );
}

export default Navigation;
