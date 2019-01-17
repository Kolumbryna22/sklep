import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';

import { MainLayout } from './components/MainLayout';
import { Root } from './components/Root';
import { Home } from './components/Home';
import { User } from './components/User';
import { NoMatch } from './components/NoMatch';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route exact path={'/'} component={Root} />
            <Route exact path={'/home'} component={Home} />
            <Route exact path={'/user'} component={User} />
            <Route component={NoMatch} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    );
  }
}

export default App;
