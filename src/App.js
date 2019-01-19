import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// import components
import { MainLayout } from './components/MainLayout/MainLayout.js';
import { Root } from './components/Root/Root.js';
import { Home } from './components/Home/Home.js';
import { User } from './components/User/User.js';
import { Basket } from './components/Basket/Basket.js';
import { NoMatch } from './components/NoMatch/NoMatch.js';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route exact path={'/'} component={Root} />
            <Route exact path={'/home'} component={Home} />
            <Route exact path={'/user'} component={User} />
            <Route exact path={'/basket'} component={Basket} />
            <Route component={NoMatch} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    );
  }
}

export default App;
