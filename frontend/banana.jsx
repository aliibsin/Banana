import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
// import { fetchProjects, fetchProject, createProject, updateProject, deleteProject } from './util/project_api_util';
import { fetchProjects, fetchProject, createProject, updateProject, deleteProject } from './actions/project_actions';
// import { signin, signout, signup } from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
  };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.store = store; //temp use to test. remove when done
  // window.signup = signup;
  // window.signin = signin;
  // window.signout = signout;

  
  window.fetchProjects = fetchProjects;
  window.fetchProject = fetchProject;
  window.createProject = createProject;
  window.updateProject = updateProject;
  window.deleteProject = deleteProject;
  
  

  ReactDOM.render(<Root store={store} />, root);
})