import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './GeneralStyle.css';

// import components
import { MainLayout } from './components/MainLayout/MainLayout.js';
import { Home } from './components/Home/Home.js';
import { Basket } from './components/Basket/Basket.js';
import { SingleProdukt } from './components/SingleProdukt/SingleProdukt.js';
import { NoMatch } from './components/NoMatch/NoMatch.js';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/basket'} component={Basket} />
            <Route exact path={'/produkt/:id'} component={SingleProdukt} />
            <Route component={NoMatch} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    );
  }
}

export default App;
