import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

export const Footer = props => {
  return (
  <div className="navContainer container">
    <p>All rights reserved</p>
    <div className="links">
      <NavLink
          exact to="/"
          activeClassName="activeLink">
        Home
      </NavLink>
      <NavLink
          exact to="/"
          activeClassName="activeLink">
        FAQ
      </NavLink>
      <NavLink
          exact to="/"
          activeClassName="activeLink">
        Regulamin
      </NavLink>
      <NavLink
          exact to="/"
          activeClassName="activeLink">
        Kontakt
      </NavLink>
    </div>
  </div>
  );
}
