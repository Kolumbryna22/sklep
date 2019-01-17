import React from 'react';
import { NavLink } from 'react-router-dom';

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
      </nav>
    </div>
  );
}
