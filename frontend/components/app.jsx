import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import LandingContainer from './landing/landing_container'
import SigninFormContainer from './session/signin_form_container';
import SignupFormContainer from './session/signup_form_container';
import HomeContainer from './home/home_container';
import ProjectShowContainer from './projects/show/project_show_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => {
  
  return (
    <div>
      <Switch>
        <AuthRoute exact path="/signin" component={SigninFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route exact path="/" component={LandingContainer} />
        <ProtectedRoute exact path="/home" component={HomeContainer} />
        <ProtectedRoute exact path="/home/:projectId" component={ProjectShowContainer}/>

        <Redirect exact from="/*" to="/" />
        
      </Switch>
    </div>
  )
}

export default App;