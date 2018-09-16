import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import PageCalendar from './pages/calendar';
import PageHome from './pages/home';
import PageLog from './pages/log';
import PageSettings from './pages/settings';

import Header from './components/header';
import Nav from './components/nav';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Nav />
        <main>
          <Switch>
            <Route exact path="/" component={PageHome} />
            <Route exact path="/calendar" component={PageCalendar} />
            <Route exact path="/log" component={PageLog} />
            <Route exact path="/settings" component={PageSettings} />
          </Switch>
        </main>
      </Fragment>
    );
  }
}

export default App;
