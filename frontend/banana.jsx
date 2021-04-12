import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
// import { signin, signout, signup } from './actions/session_actions';
// import { fetchProjects, fetchProject, createProject, updateProject, deleteProject } from './util/project_api_util';
// import { fetchProjects, fetchProject, createProject, updateProject, deleteProject } from './actions/project_actions';
// import {fetchSections, createSection, updateSection, deleteSection} from './util/section_api_util'
import {fetchSections, createSection, updateSection, deleteSection} from './actions/section_actions'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
        projects: window.currentUserProjects,
        sections: fetchSections()
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

  //all work
  // window.fetchProjects = fetchProjects;
  // window.fetchProject = fetchProject;
  // window.createProject = createProject;
  // window.updateProject = updateProject;
  // window.deleteProject = deleteProject;

  //all work
  window.fetchSections = fetchSections;
  window.createSection = createSection;
  window.updateSection = updateSection;
  window.deleteSection = deleteSection;
  
  

  ReactDOM.render(<Root store={store} />, root);
})