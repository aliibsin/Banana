import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingContainer from './landing/landing_container'
import SigninFormContainer from './session/signin_form_container';
import SignupFormContainer from './session/signup_form_container';


const App = () => {
  // <Route path="/" />
  return (
    <div>
      <header>Banana</header>
      <Switch>
        <Route path="/signin" component={SigninFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />
        <LandingContainer />
      </Switch>
    </div>
  )
}

export default App;