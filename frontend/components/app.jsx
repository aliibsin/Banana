import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LandingContainer from './landing/landing_container'
import SigninFormContainer from './session/signin_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute } from '../util/route_util'


const App = () => {
  // <Route path="/" />
  return (
    <div>
      <Switch>
        <AuthRoute path="/signin" component={SigninFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <LandingContainer />

        <Route render={() => <Redirect to="/" />} />

        <Redirect to="/" />
      </Switch>
    </div>
  )
}

export default App;