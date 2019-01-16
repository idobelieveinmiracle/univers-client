import React from 'react';
import { Link, NavLink } from "react-router-dom";

const Navbar = (props) => {
  // console.log(props.logged);
  const handleClick =(e) => {
    e.preventDefault();
    props.logout();
  }
  const log = props.logged ? (
    <NavLink to="/login" onClick={ handleClick }>Log out</NavLink>
  ) : (
    <NavLink to="/login">Log in</NavLink>
  )
  const sign = ! props.logged ? (
    <li><NavLink to="/signup">Sign up</NavLink></li>
  ) : (<span></span>)
  return (
    <nav className="nav-wrapper blue darken-3">
      <div className="container">
        <Link className="brand-logo left" to="/">Universe</Link>
        <ul className="right">
          <li><NavLink to="/ownpage">Own Page</NavLink></li>
          <li><NavLink to="/search">Search</NavLink></li>
          <li>{ log }</li>
          { sign }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
