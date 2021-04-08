import {
  RECEIEVE_PROJECTS,
  RECEIEVE_PROJECT,
  REMOVE_PROJECT
} from '../../actions/project_actions'


const projectsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIEVE_PROJECTS:
      return action.projects;
    case RECEIEVE_PROJECT:
      const newProject = { [action.project.id]: action.project };
      return Object.assign({}, state, newProject); 
    case REMOVE_PROJECT:
      let newState = Object.assign({}, state);
      delete newState[action.projectId];
      return newState;
    default:
      return state;
  }
}

export default projectsReducer;