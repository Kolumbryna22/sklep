import React from 'react';
import './Produkt.css';

export const Produkt = (props) => (
  <div className="produkt">
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
  </div>
);
