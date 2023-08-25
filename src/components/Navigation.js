import { Link } from 'react-router-dom';
import React from 'react';
import '../styles/Navigation.css';
import { UilUser } from '@iconscout/react-unicons';

function Navigation() {
  return (
    <div className="nav-bar">
      <h1 className="blue">Bookstore CMS</h1>
      <div className="nav-side">
        <nav className="nav-link">
          <Link style={{ color: '#121212' }} to="/">BOOKS</Link>
          <Link style={{ color: 'hsla(0,0%,8%,.6)' }} to="/categories">CATEGORIES</Link>
        </nav>
        <div className="nav-container">
          <UilUser size="31" color="#0290ff" />
        </div>
      </div>
    </div>
  );
}

export default Navigation;
