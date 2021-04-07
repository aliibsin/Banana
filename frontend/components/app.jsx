import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router'
import LandingContainer from './landing/landing_container'
import SigninFormContainer from './session/signin_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute } from '../util/route_util'


const App = () => {
  
  return (
    <div>
      <Switch>
        <AuthRoute path="/signin" component={SigninFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <LandingContainer />

       
        
        {/* <Redirect from="/signin/*" to="/signin" />
        <Redirect from="/signup/*" to="/signup" />
        <Redirect from="/*" to="/" />
         */}
      </Switch>
    </div>
  )
}

export default App;