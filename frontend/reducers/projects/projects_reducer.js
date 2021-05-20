import {
  RECEIVE_PROJECTS,
  RECEIVE_PROJECT,
  REMOVE_PROJECT
} from '../../actions/project_actions'

import { SIGNOUT_CURRENT_USER } from '../../actions/session_actions';

const projectsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PROJECTS:
      return action.projects;
    case RECEIVE_PROJECT:
      const newProject = { [action.project.id]: action.project };
      return Object.assign({}, state, newProject); 
    case REMOVE_PROJECT:
      let newState = Object.assign({}, state);
      delete newState[action.projectId];
      return newState;
    case SIGNOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
}

export default projectsReducer;