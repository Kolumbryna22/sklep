import React from 'react';
import './SingleProdukt.css';

export class SingleProdukt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      produkts: [
        {
          name: 'Produkt 1',
          price: 69.00,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          additionalInfo: 'Nowosc',
          imgSrc: 'produkt1',
        },
        {
          name: 'Produkt 2',
          price: 159.00,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          additionalInfo: 'Ostatnia sztuka',
          imgSrc: 'produkt2',
        },
        {
          name: 'Produkt 3',
          price: 215.00,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          additionalInfo: '',
          imgSrc: 'produkt3',
        },
        {
          name: 'Produkt 4',
          price: 59.00,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          additionalInfo: '',
          imgSrc: 'produkt4',
        },
        {
          name: 'Produkt 5',
          price: 349.00,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          additionalInfo: '',
          imgSrc: 'produkt5',
        },
        {
          name: 'Produkt 6',
          price: 55.00,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          additionalInfo: 'Nowosc',
          imgSrc: 'produkt6',
        },
      ]
    }
  }

  render() {
    return (
      <div className="singleProdukt">
        <p className="additionnalInfo">
          {this.state.produkts[this.props.match.params.id].additionalInfo}
        </p>
        <img src={"../images/" + this.state.produkts[this.props.match.params.id].imgSrc + ".png"} alt="produkt"/>
        <p className="name">
          {this.state.produkts[this.props.match.params.id].name}
        </p>
        <p className="price">
          ${this.state.produkts[this.props.match.params.id].price}
        </p>
        <p className="text">
          {this.state.produkts[this.props.match.params.id].text}
        </p>
      </div>
    );
  }
};
