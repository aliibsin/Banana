import React, {Component} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import LandingContainer from './landing/landing_container'
import SigninFormContainer from './session/signin_form_container';
import SignupFormContainer from './session/signup_form_container';
import HomeContainer from './home/home_container';
import TaskIndexContainer from './tasks/index/task_index_container';
import ProjectShowContainer from './projects/show/list/project_show_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => {
  
  return (
    <div>
      <Switch>
        <AuthRoute exact path="/signin" component={SigninFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route exact path="/" component={LandingContainer} />
        <ProtectedRoute exact path="/home" component={HomeContainer} />
        <ProtectedRoute exact path="/tasks" component={TaskIndexContainer} />
        <ProtectedRoute exact path="/home/:projectId/list" component={ProjectShowContainer}/>

        <Redirect exact from="/signin/*" to="/signin" />
        <Redirect exact from="/signup/*" to="/signup" />
        <Redirect exact from="/home/:projectId/list/*" to="/home/:projectId/list" />
        <Redirect exact from="/home/:projectId/*" to="/home/:projectId/list" />
        <Redirect exact from="/home/*" to="/home" />
        <Redirect exact from="/*" to="/" />
        
        
      </Switch>
    </div>
  )
}

export default App;