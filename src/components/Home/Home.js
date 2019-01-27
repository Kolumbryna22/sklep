import React from 'react';
import './Home.css';

export class Home extends React.Component {
  render() {
    return (
      <div className="homeContainer container">
        <div className="sortContainer">
          <h2>
            Sortuj:
          </h2>
          <p>
            Nazwa A-Z
          </p>
          <p>
            Nazwa Z-A
          </p>
          <p>
            Cena rosnąco
          </p>
          <p>
            Cena malejąco
          </p>
        </div>
        <div className="produktContainer">
          Produkty
        </div>
      </div>
    );
  }
}
