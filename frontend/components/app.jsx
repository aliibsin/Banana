import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import LandingContainer from './landing/landing_container'
import SigninFormContainer from './session/signin_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute } from '../util/route_util'


const App = () => {
  
  return (
    <div>
      <Switch>
        <AuthRoute exact path="/signin" component={SigninFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route exact path="/" component={LandingContainer} />

        <Redirect exact from="/*" to="/" />
        
      </Switch>
    </div>
  )
}

export default App;