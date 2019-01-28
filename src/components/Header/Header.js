import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export const Header = props => {
  return (
    <div>
      <nav className="navContainer container">
        <div className="logo">
          SKLEP
        </div>
        <div className="links">
          <NavLink
              exact to="/"
              activeClassName="activeLink">
            Home
          </NavLink>
          <NavLink
              exact to="/faq"
              activeClassName="activeLink">
            FAQ
          </NavLink>
          <NavLink
              exact to="/regulamin"
              activeClassName="activeLink">
            Regulamin
          </NavLink>
          <NavLink
              exact to="/kontakt"
              activeClassName="activeLink">
            Kontakt
          </NavLink>
          <NavLink
              exact to="/basket"
              activeClassName="activeLink">
            <img
                src="images/basket.png"
                alt="koszyk"
                className="basket"/>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
