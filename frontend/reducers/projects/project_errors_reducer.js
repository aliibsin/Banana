import {
  RECEIVE_PROJECT,
  RECEIVE_PROJECT_ERRORS
} from '../../actions/project_actions';

import { SIGNOUT_CURRENT_USER } from '../../actions/session_actions';

const projectErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case RECEIVE_PROJECT_ERRORS:
      return action.errors.errs;
    case RECEIVE_PROJECT:
      return [];  
    case SIGNOUT_CURRENT_USER:
      return [];
    default:
      return state;
  }
}

export default projectErrorsReducer;