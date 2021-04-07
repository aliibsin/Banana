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
      {/* <header>
        <h1>Banana</h1>
        <LandingContainer />
      </header>

      <Route path="/signin" component={SigninFormContainer} />
      <Route path="/signup" component={SignupFormContainer} /> */}
    </div>
  )
}

export default App;