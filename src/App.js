import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import PageCalendar from './pages/calendar';
import PageHome from './pages/home';
import PageLog from './pages/log';
import PageSettings from './pages/settings';
import NoMatch from './pages/404';

import Header from './components/header';
import Nav from './components/nav';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Nav />
        <main className="main-content">
          <Switch>
            <Route exact path="/" component={PageHome} />
            {/* in this case it's just easier to repeat the route for the two possible calendar urls */}
            <Route exact path="/calendar" component={PageCalendar} />
            <Route exact path="/calendar/:date" component={PageCalendar} />
            <Route exact path="/log" component={PageLog} />
            <Route exact path="/settings" component={PageSettings} />
            <Route component={NoMatch} />
          </Switch>
        </main>
      </Fragment>
    );
  }
}

export default App;
