import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink className="nav-link" exact to="/" activeClassName="active-link">Home</NavLink>
      <NavLink className="nav-link" to="/shop" activeClassName="active-link">Shop</NavLink>
      <NavLink className="nav-link" to="/about" activeClassName="active-link">About</NavLink>
    </nav>
  );
};

export default Navbar;
