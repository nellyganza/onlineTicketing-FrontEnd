import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom';
import { Provider } from 'react-redux';
import landingPage from './pages/LandingPage';
import socialAuth from './pages/socialAuthRedirect';
import store from './store';
import signupPage from './pages/signup';
import events from './pages/events';
import singleEvent from './pages/singleEventPage';
import login from './components/loginComponents/login';
import registerIndividual from './components/loginComponents/registerIndividual';
import registerOrganisation from './components/loginComponents/registerOrganisation';
import contactus from './pages/contactPage';

const App = () => (
  <Router>
    <>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={landingPage} />
          <Route exact path="/login" component={login} />
          <Route exact path="/contactus" component={contactus} />
          <Route exact path="/events" component={events} />
          <Route exact path="/event" component={singleEvent} />
          <Route exact path="/signup/individual" component={registerIndividual} />
          <Route exact path="/signup/organisation" component={registerOrganisation} />
          <Route exact path="/socialAuth/failed/:action" component={socialAuth} />
          <Route exact path="/socialAuth/success/:token" component={socialAuth} />
        </Switch>
      </Provider>
    </>
  </Router>
);
export default App;