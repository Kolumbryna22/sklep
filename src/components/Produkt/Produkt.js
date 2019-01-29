import React from 'react';
import { NavLink } from 'react-router-dom';
import './Produkt.css';

export const Produkt = (props) => (
  <NavLink
      exact to={"/produkt/" + props.index}
      index={props.index}
      className="produkt">
    <p className="additionnalInfo">
      {props.additionalInfo}
    </p>
    <img src={"images/" + props.imgSrc + ".png"} alt="produkt"/>
    <p className="name">
      {props.name}
    </p>
    <p className="price">
      ${props.price}
    </p>
  </NavLink>
);
