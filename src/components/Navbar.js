import React from 'react';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-wrapper blue darken-3">
      <div className="container">
        <Link className="brand-logo left" to="/">Universe</Link>
        <ul className="right">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/ownpage">Own Page</NavLink></li>
          <li><NavLink to="/search">Search</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
