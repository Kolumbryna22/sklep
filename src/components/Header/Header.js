import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export const Header = props => {
  return (
    <div>
      <nav>
        <div>
          Navbar
        </div>
        <NavLink
            exact to="/"
            activeClassName='activeLink'>
          Root
        </NavLink>
        <NavLink
            exact to="/home"
            activeClassName='activeLink'>
          Home
        </NavLink>
        <NavLink
            exact to="/user"
            activeClassName='activeLink'>
          User
        </NavLink>
        <NavLink
            exact to="/basket"
            activeClassName='activeLink'>
          Basket
        </NavLink>
      </nav>
    </div>
  );
}
