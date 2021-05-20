import {
  RECEIVE_TASK,
  RECEIVE_TASK_ERRORS
} from '../../actions/task_actions';

import { SIGNOUT_CURRENT_USER } from '../../actions/session_actions';

const taskErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case RECEIVE_TASK_ERRORS:
      return action.errors.errs;
    case RECEIVE_TASK:
      return [];
    case SIGNOUT_CURRENT_USER: 
      return [];
    default:
      return state;
  }
}

export default taskErrorsReducer;