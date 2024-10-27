import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Shopping Cart App</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  </header>
);

export default Header;
