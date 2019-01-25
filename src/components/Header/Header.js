import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export const Header = props => {
  return (
    <div>
      <nav className="navigation">
        <div className="logo">
          Logo
        </div>
        <div className="links">
          <NavLink
              exact to="/"
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
        </div>
      </nav>
    </div>
  );
}
